const { Log } = require("../models/Log");
async function obtenerLogs(req, res) {
  try {
    let user = await req.jwtVerify();

    const logs = await Log.find({
      votacion: req.params.votacion,
    });

    res.status(200).send(logs);
  } catch (error) {
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = { obtenerLogs };
