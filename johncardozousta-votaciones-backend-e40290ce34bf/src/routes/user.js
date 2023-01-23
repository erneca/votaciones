const { login } = require("../controllers/login");
const {
  encontrarVotacionesEstudiante,
} = require("../controllers/encontrarVotacionesEstudiante");
const {
  encontrarVotacionesSecretariaGeneral,
} = require("../controllers/encontrarVotacionesSecretariaGeneral");
const {
  encontrarVotacionesSecretariaDivision,
} = require("../controllers/encontrarVotacionesSecretariaDivision");
const {
  encontrarVotacionesDecano,
} = require("../controllers/encontrarVotacionesDecano");

const opts = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        usuario: { type: "string" },
        pass: { type: "string" },
      },
      required: ["usuario", "pass"],
    },
  },
};

module.exports = async function (fastify, options, done) {
  fastify.post("/login", opts, login);
  fastify.get("/votacionesEstudiante", encontrarVotacionesEstudiante);
  fastify.get("/votacionesGeneral", encontrarVotacionesSecretariaGeneral);
  fastify.get("/votacionesDivision", encontrarVotacionesSecretariaDivision);
  fastify.get("/votacionesDecanos", encontrarVotacionesDecano);
  done();
};
