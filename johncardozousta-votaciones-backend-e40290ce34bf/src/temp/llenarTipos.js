require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const { Tipo } = require("../models/Tipo");
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
        {
          nombre:
            "VOTACIÓN REPRESENTANTE ESTUDIANTIL POR CURSO, NIVEL O MÓDULO",
          codigo: 1,
          nombreDelTipo: "Nivel o módulo",
        },
        {
          nombre: "VOTACIÓN DE REPRESENTANTE ESTUDIANTIL POR PROGRAMA",
          codigo: 2,
          nombreDelTipo: "Dependiente",
        },
        {
          nombre: "VOTACIÓN REPRESENTANTE ESTUDIANTIL ANTE EL CONSEJO SUPERIOR",
          codigo: 3,
          nombreDelTipo: "Nivel o módulo",
        },
        {
          nombre:
            "VOTACIÓN DE REPRESENTANTE ESTUDIANTIL ANTE EL CONSEJO ACADÉMICO DEL PROGRAMA",
          codigo: 4,
          nombreDelTipo: "Nivel o módulo",
        },
      ];
      array.forEach(async (element) => {
        const tipos = new Tipo(element);
        await tipos.save();
      });
    }
  );
}

bd();
