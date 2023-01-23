const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

let ProgramaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    seccional: { type: String, required: true },
    division: { type: String, required: true },
    facultad: { type: String, required: true },
  },
  {
    collection: "programa",
  }
);

module.exports = {
  Programa: mongoose.model("Programa", ProgramaSchema),
  ProgramaSchema: ProgramaSchema,
};
