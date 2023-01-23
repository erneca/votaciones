const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

let LogSchema = new Schema(
  {
    fecha: { type: Date, required: true },
    descripcion: { type: String, required: true },
    usuario: { type: JSON, required: true },
    votacion: { type: Schema.Types.ObjectId, required: true, ref: "Votacion" },
  },
  {
    collection: "log",
  }
);

module.exports = {
  Log: mongoose.model("Log", LogSchema),
  LogSchema: LogSchema,
};
