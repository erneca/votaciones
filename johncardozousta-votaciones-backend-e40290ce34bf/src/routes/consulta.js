const {
  obtenerNombresVotacion,
} = require("../controllers/obtenerNombresVotacion");
const {
  obtenerTiposVotacion,
} = require("../controllers/obtenerTiposVotaciones");
const { obtenerProgramas } = require("../controllers/obtenerProgramas");
const { obtenerFacultades } = require("../controllers/obtenerFacultades");
const {
  obtenerDependientes,
} = require("../controllers/obtenerVotacionesDependientes");
const {
  verResultadosDeVotacion,
} = require("../controllers/verResultadosDeVotacion");

module.exports = async function (fastify, options, done) {
  fastify.get("/nombres", obtenerNombresVotacion);
  fastify.get("/tipos", obtenerTiposVotacion);
  fastify.get("/programa/:facultad", obtenerProgramas);
  fastify.get("/facultades", obtenerFacultades);
  fastify.get("/dependientes/:programa", obtenerDependientes);
  fastify.get("/:votacion", verResultadosDeVotacion);
  done();
};
