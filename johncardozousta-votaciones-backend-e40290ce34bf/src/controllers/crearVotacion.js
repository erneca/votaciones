const mongoose = require("mongoose");
const { Estado } = require("../models/Estado");
const { NombreVotacion } = require("../models/NombreVotacion");
const { Tipo } = require("../models/Tipo");
const { Programa } = require("../models/Programa");
const { Votacion } = require("../models/Votacion");

//Registrar en el Log
const { logCrearVotacion } = require("../controllers/logCrearVotacion");
const { votoEnBlanco } = require("../controllers/votoEnBlanco");

// const VotacionesModel = mongoose.model("Votacion");

async function crearVotacion(req, res) {
  try {
    const user = await req.jwtVerify();

    const { idTipoVotacion, fecha_fin, fecha_inicio, nombrePrograma } =
      req.body;

    const tipoVotacion = await Tipo.findById(idTipoVotacion);

    //Converts the dates from string to Date type
    let fecha1 = new Date(fecha_inicio);
    let fecha2 = new Date(fecha_fin);

    //Validate the date less or great
    if (fecha1.getTime() >= fecha2.getTime()) {
      res.status(500).send(`Error en las fechas`);
    }
    const estadoVotacion = await Estado.findOne({
      codigo: 1,
    });
    const programas = await Programa.findById(nombrePrograma);

    const paramsVotacion = {
      tipo: tipoVotacion,
      fecha_inicio: fecha1,
      fecha_fin: fecha2,
      estado: estadoVotacion,
      periodo: user.periodo,
      programa: programas,
      // descripcion: req.body.descripcion,
    };

    //Lógica de negocio para votación de nivel o módulo
    const votacion = new Votacion(paramsVotacion);

    await votacion.save();
    await logCrearVotacion(user, votacion._id);
    await votoEnBlanco(votacion._id, votacion.tipo.codigo);

    //   let CantidadSemestres = 4;
    //   for (let i = 0; i < CantidadSemestres; i++) {
    //     // paramsVotacion.nombre = `Votación para semestre ${i + 1}`;
    //     paramsVotacion.tipo.opciones = i + 1;
    //     console.log(paramsVotacion);
    //     const votacion = new Votacion(paramsVotacion);
    //     await votacion.save();
    //     await logCrearVotacion(user, votacion._id);
    // } else {
    //   const votacion = new Votacion(paramsVotacion);
    //   await votacion.save();
    //   await logCrearVotacion(user, votacion._id);
    // }

    res.status(200).send(`Se ha creado la votación`);
  } catch (error) {
    res.status(500).send(`Error en el servidor ${error}`);
  }
}

module.exports = {
  crearVotacion,
};
