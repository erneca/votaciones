const postulacionOpciones = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        id_votacion: { type: "string" },
        propuesta: { type: "string" },
      },
      required: ["id_votacion", "propuesta"],
    },
  },
};

module.exports = {
  postulacionOpciones,
};
