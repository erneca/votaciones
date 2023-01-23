require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

const { PostulanteModel } = require("../models/Postulantes");
const { VotacionesModel } = require("../models/Votacion");
const { VotoModel } = require("../models/Voto");

async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    async () => {
      console.log("Conectado a la base de datos :D");

      let array = [
        {
          usuario_votante: {
            nombre: "nombre1",
          },
          candidato: await PostulanteModel.findById("6254e05ee99ecb8905ab5240"),
          id_votacion: await VotacionesModel.findById(
            "625397489af4db9e737d4c4d"
          ),
        },
        {
          usuario_votante: {
            nombre: "nombre2",
          },
          candidato: await PostulanteModel.findById("6254e05ee99ecb8905ab523f"),
          id_votacion: await VotacionesModel.findById(
            "625397489af4db9e737d4c4c"
          ),
        },
      ];
      array.forEach(async (element) => {
        const programa = new VotoModel(element);
        await programa.save();
      });
    }
  );
}

bd();
