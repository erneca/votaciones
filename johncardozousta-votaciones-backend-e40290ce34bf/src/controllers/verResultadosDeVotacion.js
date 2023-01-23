const { Votacion } = require("../models/Votacion");
const { Voto } = require("../models/Voto");
const { Postulante } = require("../models/Postulante");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

async function verResultadosDeVotacion(req, res) {
  try {
    const user = await req.jwtVerify();

    const votacion = await Votacion.findById(req.params.votacion).populate({
      path: "estado",
    });
    if (votacion.estado.codigo == 4) {
      let voto = await Voto.aggregate([
        {
          $match: {
            id_votacion: ObjectId(req.params.votacion),
          },
        },
        {
          $group: {
            _id: "$candidato",
            postulante: { $addToSet: "$candidato" },
            votos: { $sum: 1 },
          },
        },
        {
          $lookup: {
            from: "postulante",
            pipeline: [
              {
                $project: {
                  _id: 1,
                  usuario: { usuario: "$usuario" },
                  semestre: "$semestre",
                },
              },
            ],
            localField: "postulante",
            foreignField: "_id",
            as: "postulante",
          },
        },

        {
          $sort: { "postulante.semestre": -1, votos: -1 },
        },
      ]).project("postulante votos -_id");

      //TODO: calcular el ganador de cada semestre para guardar el true en la tabla postulante

      let ids = [];
      // Se aisla los Id's de los ganadores de cada semestre
      ids.push(voto[0].postulante[0]._id);
      for (let i = 1; i < voto.length; i++) {
        console.log(voto[i].postulante[0].semestre);

        if (
          voto[i].postulante[0].semestre < voto[i - 1].postulante[0].semestre
        ) {
          ids.push(voto[i].postulante[0]._id);
        }
      }

      const response = await Postulante.updateMany(
        { _id: { $in: ids } },
        { isGanador: true }
      );

      if (user.rol.codigo == 1) {
        voto = voto.filter((candidato) => {
          return candidato.postulante[0].semestre == user.semestre;
        });
        console.log(voto);
        console.log("-------------");

        res.status(200).send(`${JSON.stringify(voto)}`);
      } else {
        res.status(200).send(`${JSON.stringify(voto)}`);
      }
    } else {
      res.status(400).send(`votación no cerrada`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`${error}`);
  }
}

module.exports = {
  verResultadosDeVotacion,
};
