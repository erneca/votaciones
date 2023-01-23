// import the config file
require("dotenv").config({
  path: ".env",
});
// libraries and Frameworks
const fastify = require("fastify");
const mongoose = require("mongoose");

function build(opts = {}) {
  // se crea el servidor
  const app = fastify(opts);

  // Middleware
  app.register(require("fastify-cors"));
  app.register(require("fastify-jwt"), { secret: process.env.SECRET });
  app.register(require("./routes/user"), { prefix: "/user" });
  app.register(require("./routes/consulta"), { prefix: "/consulta" });
  app.register(require("./routes/votacion"), { prefix: "/votacion" });

  app.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
  // Endpoint de prueba
  app.get("/", async function (req, reply) {
    reply.send("Bienvenido a la aplicación");
  });

  mongoose.connect(
    process.env.CONEXION_MONGODB,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },

    () => {
      console.log("Conectado a la base de datos :D");
    }
  );

  // retorna el servidor
  return app;
}
// exporta la configuaracion del servidor para poder crear un nuevo server en server.js o para los test
module.exports = build;
