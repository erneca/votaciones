require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const { VotacionesModel } = require("../models/Votacion");

const {
  usuVotModel,
  postulanteModel,
  ganadorModel,
} = require("../models/user");

async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    async () => {
      const votacion2 = await VotacionesModel.findOne({
        _id: "625397489af4db9e737d4c4d",
      });
      console.log("Conectado a la base de datos :D");

      let array = [
        {
          votacion: votacion2,
          usuario: {
            _id: 1,
            nombre: "Lina",
            documento: "123",
            semestre: "9",
            sede: "Bogotá",
            programa: "Ingeniería de Telecomunicaciones",
            facultad: "Facultad de Ingeniería de Telecomunicaciones",
          },
        },
      ];
      array.forEach(async (element) => {
        const programa = new usuVotModel(element);
        await programa.save();
      });
    }
  );
}

bd();
