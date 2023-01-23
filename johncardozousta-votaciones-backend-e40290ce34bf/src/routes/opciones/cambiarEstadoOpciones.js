const cambiarEstadoOpciones = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        codigo: { type: "number" },
      },
      required: ["codigo"],
    },
  },
};

module.exports = {
  cambiarEstadoOpciones,
};
