const { Log } = require("../models/Log");

async function logCrearVotacion(user, idVotacion) {
  if (user.rol.codigo == 2) {
    paramsLog = {
      fecha: new Date(),
      descripcion: `El usuario ${user.nombre} ${user.apellido} ha creado la votación con id: ${idVotacion}`,
      usuario: user.nombre + " " + user.apellido,
      votacion: idVotacion,
    };
    const log = new Log(paramsLog);
    await log.save();
  } else {
    console.log("Usted no puede crear una votación");
  }
}

module.exports = { logCrearVotacion };
