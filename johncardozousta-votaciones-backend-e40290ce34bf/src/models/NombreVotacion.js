const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

let NombreVotacionSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    inabilidades: { type: Array, required: false },
  },
  {
    collection: "nombre votacion",
  }
);

module.exports = {
  NombreVotacion: mongoose.model("NombreVotacion", NombreVotacionSchema),
  NombreVotacionSchema: NombreVotacionSchema,
};
