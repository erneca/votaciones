require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

const { Estado } = require("../models/Estado");
const nombreVotacionesModel = require("../models/NombreVotacion");
const { TiposModel } = require("../models/Tipos");
const { ProgramaModel } = require("../models/Programas");
const { Votacion } = require("../models/Votacion");
const logs = require("../models/Logs");

async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    async () => {
      const estado = await Estado.findOne({
        codigo: 1,
      });
      const nVotaciones = await nombreVotacionesModel.findOne({
        codigo: 2,
      });
      const programas = await ProgramaModel.findOne({
        nombre: "Ingeniería de Telecomunicaciones",
      });
      const tipo = await TiposModel.findOne({
        codigo: 2,
      });

      console.log("Conectado a la base de datos :D");

      let array = [
        {
          fecha: new Date(),
          descripcion: "Descripción del log 1",
          usuario: {
            nombre: "persona1",
          },
          votacion: await Votacion.findById("62637a4e27a2a4a261ef5ae1"),
        },
        {
          fecha: new Date(),
          descripcion: "Descripción del log 2",
          usuario: {
            nombre: "persona1",
          },
          votacion: await Votacion.findById("62637b9927a2a4a261ef5b22"),
        },
      ];
      array.forEach(async (element) => {
        const programa = new logs(element);
        await programa.save();
      });
    }
  );
}

bd();
