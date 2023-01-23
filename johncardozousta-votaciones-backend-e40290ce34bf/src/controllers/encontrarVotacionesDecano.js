const { usuVotModel } = require("../models/user");
const { Votacion } = require("../models/Votacion");

async function encontrarVotacionesDecano(req, res) {
  try {
    let user = await req.jwtVerify();
    let votaciones = await Votacion.find()
      .populate({
        path: "tipo",
        select: "nombre nombreDelTipo inabilidades -_id",
      })
      .populate({
        path: "estado",
        select: "nombre codigo -_id",
      })
      .populate({
        path: "programa",
        match: {
          seccional: user.seccional.nombre,
          division: user.division.nombre,
          facultad: user.facultad.nombre,
        },
        select: "nombre seccional division facultad -_id",
      });
    votaciones = votaciones.filter((votacion) => votacion.programa != null);
    res.status(200).send(votaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}
module.exports = {
  encontrarVotacionesDecano,
};
