const revisarPostulantesOpciones = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        postulantes: { type: "array" },
      },
      required: ["postulantes"],
    },
  },
};

module.exports = {
  revisarPostulantesOpciones,
};
