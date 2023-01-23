require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const { NombreVotacion } = require("../models/NombreVotacion");
async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    () => {
      console.log("Conectado a la base de datos :D");
      let array = [
        "VOTACIÓN REPRESENTANTE ESTUDIANTIL POR CURSO, NIVEL O MÓDULO",
        "VOTACIÓN DE REPRESENTANTE ESTUDIANTIL POR PROGRAMA",
        "VOTACIÓN DE REPRESENTANTE ESTUDIANTIL ANTE EL CONSEJO ACADÉMICO DEL PROGRAMA",
        "VOTACIÓN REPRESENTANTE ESTUDIANTIL ANTE EL CONSEJO SUPERIOR",
      ];
      cont = 1;

      array.forEach(async (element) => {
        const votacion = new NombreVotacion({
          nombre: element,
          codigo: cont,
        });
        cont = cont + 1;

        await votacion.save();
      });
    }
  );
}

bd();
