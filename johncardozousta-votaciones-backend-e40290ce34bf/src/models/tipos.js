const { Schema, model } = require("mongoose");

const TiposVotacionSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    opciones: { type: Array, required: true },
  },
  {
    collection: "tipo",
  }
);

let TiposModel = model("Tipos", TiposVotacionSchema);

module.exports = TiposModel;
