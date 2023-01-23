const { Programa } = require("../models/Programa");
async function obtenerNombresFacultades(req, res) {
  try {
    //Obtiene todas las facultades
    const facultad = await Programa.find({}, "facultad");
    res.status(200).send(facultad);
  } catch (error) {
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = {
  obtenerNombresFacultades,
};
