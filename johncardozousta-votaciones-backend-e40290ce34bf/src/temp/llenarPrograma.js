require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const { Programa } = require("../models/Programa");

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
          nombre: "Maestría en Telecomunicaciones y Regulación TIC",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería de Telecomunicaciones",
        },
        {
          nombre:
            "Especialización en Gestión de Servicios de Tecnologías de la Información",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería de Telecomunicaciones",
        },
        {
          nombre: "Maestría en Ingeniería Electrónica",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería electrónica",
        },
        {
          nombre: "Maestría en Tecnologías Limpias",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería Ambiental",
        },
        {
          nombre: "Maestría en Telecomunicaciones y Regulación TIC",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería de Telecomunicaciones",
        },
        {
          nombre:
            "Especialización en Gestión de Servicios de Tecnologías de la Información",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería de Telecomunicaciones",
        },
        {
          nombre: "Maestría en Ingeniería Electrónica",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería electrónica",
        },
        {
          nombre: "Comunicación Social",
          seccional: "Bogotá",
          division: "Ingenierías",
          facultad: "ingeniería Ambiental",
        },
      ];
      array.forEach(async (element) => {
        const programa = new Programa(element);
        await programa.save();
      });
    }
  );
}

bd();
