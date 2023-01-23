require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const { Estado } = require("../models/Estado");
async function bd() {
  mongoose.connect(
    "mongodb+srv://admin:Admin.001f@cluster0.7m8o9.mongodb.net/votaciones-database?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    () => {
      console.log("Conectado a la base de datos :D");
      let array = ["Postulación", "Revisión", "Votación", "Cerrada"];
      cont = 1;
      array.forEach(async (element) => {
        const estado = new Estado({
          nombre: element,
          codigo: cont,
        });
        cont = cont + 1;
        await estado.save();
      });
    }
  );
}

bd();
