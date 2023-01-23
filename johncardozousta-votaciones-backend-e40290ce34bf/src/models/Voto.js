const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

// Schemas
let VotoSchema = new Schema(
  {
    usuario_votante: {
      type: JSON,
      required: true,
    },
    candidato: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Postulante",
    },
    id_votacion: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Votacion",
    },
  },
  {
    collection: "voto",
  }
);

module.exports = {
  Voto: mongoose.model("Voto", VotoSchema),
  VotoSchema: VotoSchema,
};
