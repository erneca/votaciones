const { Schema, model } = require("mongoose");

let EstadoVotacion = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
  },
  {
    collection: "estado",
  }
);

let Estados_Votacion = model("Estados-Votacion", EstadoVotacion);

module.exports = {
  Estados_Votacion,
};
