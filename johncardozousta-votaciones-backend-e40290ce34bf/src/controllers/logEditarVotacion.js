const { Log } = require("../models/Log");

async function logEditarVotacion(user, idVotacion, fecha_inicio, fecha_fin) {
  if (user.rol.codigo == 2) {
    paramsLog = {
      fecha: new Date(),
      descripcion: `El usuario ${user.nombre} ${user.apellido} ha cambiado la fecha inicial a: ${fecha_inicio} y fecha final a: ${fecha_fin}`,
      usuario: user.nombre + " " + user.apellido,
      votacion: idVotacion,
    };
    const log = new Log(paramsLog);
    await log.save();
  } else {
    console.log("Usted no puede crear una votación");
  }
}

module.exports = { logEditarVotacion };
