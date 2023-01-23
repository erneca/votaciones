const { Votacion } = require("../models/Votacion");

async function obtenerDependientes(req, res) {
  try {
    let user = await req.jwtVerify();
    console.log(req.params.programa);
    let votaciones = await Votacion.find({
      programa: req.params.programa,
    })
      .populate({
        path: "tipo",
        select: "nombre -_id",
      })
      .populate({
        path: "estado",
        match: {
          codigo: 4,
        },
        select: "nombre -_id",
      })
      .populate({
        path: "programa",
        select: "nombre seccional division facultad -_id",
      });
    // .populate({
    //   path: "tipo",
    //   select: "nombre -_id",
    // });
    votaciones = votaciones.filter((votacion) => votacion.estado != null);
    console.log(votaciones);
    res.status(200).send(votaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}
module.exports = {
  obtenerDependientes,
};
