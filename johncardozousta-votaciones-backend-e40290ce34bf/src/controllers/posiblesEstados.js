const { Estado } = require("../models/Estado");
const { Votacion } = require("../models/Votacion");
async function posiblesEstados(req, res) {
  try {
    const user = await req.jwtVerify();

    const estadoActual1 = await Votacion.findById(
      req.params.votacion,
      "estado -_id"
    ).populate({ path: "estado", select: "codigo -_id" });

    if (estadoActual1.estado.codigo == 1 || estadoActual1.estado.codigo == 3) {
      const estado = await Estado.findOne(
        { codigo: estadoActual1.estado.codigo + 1 },
        "nombre codigo -_id"
      );
      res.status(200).send([estado]);
    } else if (estadoActual1.estado.codigo == 2) {
      const estado = await Estado.find(
        { $or: [{ codigo: 1 }, { codigo: 3 }] },
        "nombre codigo -_id"
      );
      res.status(200).send(estado);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor ${error}`);
  }
}

module.exports = {
  posiblesEstados,
};
