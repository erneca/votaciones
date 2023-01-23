const { Log } = require("../models/Log");

async function logCambiarEstado(user, idVotacion, estado) {
  if (user.rol.codigo == 2) {
    paramsLog = {
      fecha: new Date(),
      descripcion: `El usuario ${user.nombre} ${user.apellido} ha cambiado de estado la votación a: ${estado}`,
      usuario: user.nombre + " " + user.apellido,
      votacion: idVotacion,
    };
    const log = new Log(paramsLog);
    await log.save();
  } else {
    console.log("Usted no puede crear una votación");
  }
}

module.exports = { logCambiarEstado };
