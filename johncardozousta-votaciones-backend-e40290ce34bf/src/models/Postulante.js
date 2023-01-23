const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

let PostulanteSchema = new Schema(
  {
    usuario: {
      type: JSON,
      required: true,
    },
    id_votacion: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Votacion",
    },
    propuesta: { type: String, required: false },
    isAprobado: { type: Boolean, default: false },
    isGanador: { type: Boolean, default: false, required: true },
    semestre: { type: Number, required: true },
  },
  {
    collection: "postulante",
  }
);

module.exports = {
  Postulante: mongoose.model("Postulante", PostulanteSchema),
  PostulanteSchema: PostulanteSchema,
};
