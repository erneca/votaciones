const { Log } = require("../models/Log");

async function logRevisarPostulantes(user, idVotacion, numeroPostulantes) {
  if (user.rol.codigo == 2) {
    paramsLog = {
      fecha: new Date(),
      descripcion: `El usuario ${user.nombre} ${user.apellido} ha cambiado el estado a ${numeroPostulantes} postulantes`,
      usuario: user.nombre + " " + user.apellido,
      votacion: idVotacion,
    };
    const log = new Log(paramsLog);
    await log.save();
  } else {
    console.log("Usted no puede crear una votación");
  }
}

module.exports = { logRevisarPostulantes };
