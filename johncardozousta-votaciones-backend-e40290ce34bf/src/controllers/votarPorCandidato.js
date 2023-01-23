const { Voto } = require("../models/Voto");
const { Postulante } = require("../models/Postulante");
const { Votacion } = require("../models/Votacion");

async function votarPorCandidato(req, res) {
  try {
    let user = await req.jwtVerify();

    const votacion = await Votacion.findById(req.params.votacion).populate({
      path: "estado",
    });

    const voto = await Voto.find({
      usuario_votante: {
        nombre: user.nombre,
        apellido: user.apellido,
      },
      id_votacion: req.params.votacion,
    });

    if (votacion.estado.codigo == 3 && voto.length == 0) {
      const paramsVoto = {
        usuario_votante: {
          nombre: user.nombre,
          apellido: user.apellido,
        },
        candidato: await Postulante.findById({
          _id: req.params.postulante,
        }),
        id_votacion: votacion,
      };
      const voto = new Voto(paramsVoto);
      await voto.save();
      res.status(200).send("voto guardado exitosamente");
    } else {
      res
        .status(400)
        .send(
          `La votación no se encuentra en estado votación o usted ya votó en esta votación`
        );
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
}
module.exports = {
  votarPorCandidato,
};
