const votacionesOpciones = {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        idTipoVotacion: { type: "string" },
        fecha_fin: { type: "string" },
        fecha_inicio: { type: "string" },
        nombrePrograma: { type: "string" },
      },
      required: [
        "idTipoVotacion",
        "fecha_fin",
        "fecha_inicio",
        "nombrePrograma",
      ],
    },
  },
};

module.exports = {
  votacionesOpciones,
};
