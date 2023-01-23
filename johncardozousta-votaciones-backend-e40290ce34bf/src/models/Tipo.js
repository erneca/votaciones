const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

const TipoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
    nombreDelTipo: { type: String, required: true },
    inabilidades: { type: Array, required: false },
  },
  {
    collection: "tipo",
  }
);

module.exports = {
  Tipo: mongoose.model("Tipo", TipoSchema),
  TipoSchema: TipoSchema,
};
