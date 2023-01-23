const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

// Schemas
let VotacionSchema = new Schema(
  {
    // nombre: { type: Schema.ObjectId, required: true, ref: "NombreVotacion" },
    tipo: { type: Schema.ObjectId, required: true, ref: "Tipo" },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    estado: { type: Schema.ObjectId, required: true, ref: "Estado" },
    periodo: { type: Number, required: true },
    programa: { type: Schema.ObjectId, required: true, ref: "Programa" },
    descripcion: { type: String, required: false },
  },
  {
    collection: "votacion",
  }
);

// models

module.exports = {
  Votacion: mongoose.model("Votacion", VotacionSchema),
  VotacionSchema: VotacionSchema,
};
