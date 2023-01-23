const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

let EstadoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
  },
  {
    collection: "estado",
  }
);

module.exports = {
  Estado: mongoose.model("Estado", EstadoSchema),
  EstadoSchema: EstadoSchema,
};
