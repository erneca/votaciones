const editarVotacionOpciones = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        fecha_inicio: { type: "string" },
        fecha_fin: { type: "string" },
      },
      required: ["fecha_inicio", "fecha_fin"],
    },
  },
};

module.exports = {
  editarVotacionOpciones,
};
