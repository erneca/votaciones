const { Votacion } = require("../models/Votacion");
const { Postulante } = require("../models/Postulante");

const {
  logRevisarPostulantes,
} = require("../controllers/logRevisarPostulantes");

async function revisarPostulantes(req, res) {
  try {
    const user = await req.jwtVerify();

    const vot = await Votacion.findById(
      req.params.votacion,
      "estado -_id"
    ).populate({
      path: "estado",
      select: "codigo -_id",
    });
    if (vot.estado.codigo == 2) {
      const postulantes = await Postulante.find(
        {
          _id: {
            $in: req.body.postulantes,
          },
        },
        "isAprobado _id"
      );
      //FIXME: mirar condicionales en aggregate
      for (let postulante of postulantes) {
        await Postulante.findByIdAndUpdate(postulante._id, {
          isAprobado: !postulante.isAprobado,
        });
      }
      //Log para la revisión de los postulantes
      await logRevisarPostulantes(
        user,
        req.params.votacion,
        postulantes.length
      );
      res
        .status(200)
        .send(`Se han aprobado ${postulantes.length} postulantes `);
    } else {
      res.status(500).send(`La votación no se encuentra en estado revisión`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`ERROR: ${error}`);
  }
}

module.exports = {
  revisarPostulantes,
};
