require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

const { PostulanteModel } = require("../models/Postulantes");
const { VotacionesModel } = require("../models/Votacion");

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
          usuario: {
            nombre: "nombre1",
          },
          id_votacion: await VotacionesModel.findById(
            "625397489af4db9e737d4c4c"
          ),
          propuesta: "Propuesta1",
          isAprobado: true,
        },
        {
          usuario: {
            nombre: "nombre2",
          },
          id_votacion: await VotacionesModel.findById(
            "625397489af4db9e737d4c4d"
          ),
          propuesta: "Propuesta2",
          isAprobado: false,
        },
      ];
      array.forEach(async (element) => {
        const programa = new PostulanteModel(element);
        await programa.save();
      });
    }
  );
}

bd();
