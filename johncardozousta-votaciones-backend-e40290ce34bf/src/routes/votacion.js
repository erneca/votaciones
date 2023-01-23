const { obtenerPostulantes } = require("../controllers/obtenerPostulantes");
const { crearPostulacion } = require("../controllers/crearPostulacion");
const { crearVotacion } = require("../controllers/crearVotacion");
const { obtenerLogs } = require("../controllers/obtenerLogs");
const { cambiarEstado } = require("../controllers/cambiarEstado");
const { posiblesEstados } = require("../controllers/posiblesEstados");
const { revisarPostulantes } = require("../controllers/revisarPostulantes");
const { editarVotacion } = require("../controllers/editarVotacion");
const { votarPorCandidato } = require("../controllers/votarPorCandidato");

// import options for endpoints
const { votacionesOpciones } = require("./opciones/votacionesOpts");
const { postulacionOpciones } = require("./opciones/postulacionOpciones");
const { cambiarEstadoOpciones } = require("./opciones/cambiarEstadoOpciones");
const {
  revisarPostulantesOpciones,
} = require("./opciones/revisarPostulantesOpciones");
const { editarVotacionOpciones } = require("./opciones/editarVotacionOpciones");

module.exports = async function (fastify, options, done) {
  fastify.post("/", votacionesOpciones, crearVotacion);
  fastify.post("/:votacion/postulacion", postulacionOpciones, crearPostulacion);
  fastify.post("/:votacion/postulante/:postulante", votarPorCandidato); //TODO: validar datos
  fastify.get("/:votacion/log", obtenerLogs);
  fastify.get("/:votacion/postulantes", obtenerPostulantes);
  fastify.get("/:votacion/posibles-estados", posiblesEstados);
  fastify.put("/:votacion/estado", cambiarEstadoOpciones, cambiarEstado);
  fastify.put(
    "/:votacion/postulantes",
    revisarPostulantesOpciones,
    revisarPostulantes
  );
  fastify.put("/:votacion/editar", editarVotacionOpciones, editarVotacion);
  done();
};
