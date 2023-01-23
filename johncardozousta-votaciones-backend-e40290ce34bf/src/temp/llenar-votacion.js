require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

const { Estado } = require("../models/Estado");
const { NombreVotacion } = require("../models/NombreVotacion");
const { Tipo } = require("../models/Tipo");
const { Programa } = require("../models/Programa");
const { Votacion } = require("../models/Votacion");
const logs = require("../models/Log");

async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    async () => {
      const estado = await Estado.findOne({
        codigo: 3,
      });
      const nVotaciones = await NombreVotacion.findOne({
        codigo: 3,
      });
      const programas = await Programa.findOne({
        facultad: "ingeniería de Telecomunicaciones",
      });
      const tipo = await Tipo.findOne({
        codigo: 1,
      });

      console.log("Conectado a la base de datos :D");

      let array = [
        {
          nombre: nVotaciones,
          fecha_inicio: new Date(),
          fecha_fin: new Date(),
          estado: estado,
          periodo: 20221,
          programa: programas,
          descripcion: "votación mamalona",
          tipo: tipo,
        },
        {
          nombre: nVotaciones,
          fecha_inicio: new Date(),
          fecha_fin: new Date(),
          estado: estado,
          periodo: 20221,
          programa: await Programa.findOne({
            facultad: "ingeniería Ambiental",
          }),
          descripcion: "votación mamalonan't",
          tipo: tipo,
        },
      ];
      array.forEach(async (element) => {
        const programa = new Votacion(element);
        await programa.save();
      });
    }
  );
}

bd();
