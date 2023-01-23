const { Programa } = require("../models/Programa");

async function obtenerProgramas(req, res) {
  try {
    const programas = await Programa.find({
      seccional: "Bogotá",
      division: "Ingenierías",
      facultad: req.params.facultad,
    });
    res.status(200).send(programas);
  } catch (error) {
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = {
  obtenerProgramas,
};
