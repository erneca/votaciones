const { Programa } = require("../models/Programa");

async function obtenerFacultades(req, res) {
  try {
    const programas = await Programa.find({
      seccional: "Bogotá",
      division: "Ingenierías",
    });
    let facultades = programas.map((programa) => {
      return programa.facultad;
    });
    const facultadesArr = new Set(facultades);
    facultades = [...facultadesArr];
    res.status(200).send(facultades);
  } catch (error) {
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = {
  obtenerFacultades,
};
