const { Tipo } = require("../models/Tipo");
const { Votacion } = require("../models/Votacion");

async function obtenerTiposVotacion(req, res) {
  try {
    let user = await req.jwtVerify();
    let tipos = await Tipo.find();
    res.status(200).send(tipos);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = {
  obtenerTiposVotacion,
};
