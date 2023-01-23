const { NombreVotacion } = require("../models/NombreVotacion");

async function obtenerNombresVotacion(req, res) {
  try {
    //TODO: ARREGLAR ESTO
    const votaciones = await NombreVotacion.find();
    res.status(200).send(votaciones);
  } catch (error) {
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = {
  obtenerNombresVotacion,
};
