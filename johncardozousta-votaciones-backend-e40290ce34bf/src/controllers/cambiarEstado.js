const { Estado } = require("../models/Estado");
const { Votacion } = require("../models/Votacion");

const { logCambiarEstado } = require("../controllers/logCambiarEstado");

async function cambiarEstado(req, res) {
  try {
    const user = await req.jwtVerify();

    const nuevoEstado = await Estado.findOne({
      codigo: req.body.codigo,
    });
    const cambioEstado = await Votacion.findByIdAndUpdate(req.params.votacion, {
      estado: nuevoEstado,
    });
    let votacion = await Votacion.findById(req.params.votacion)
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
        },
        select: "nombre seccional division facultad -_id",
      });
    await logCambiarEstado(user, req.params.votacion, nuevoEstado.nombre);
    res.status(200).send(votacion);
  } catch (error) {
    res.status(500).send(`Error en el servidor ${error}`);
  }
}

module.exports = {
  cambiarEstado,
};
