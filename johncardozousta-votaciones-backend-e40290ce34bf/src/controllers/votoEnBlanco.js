const { Postulante } = require("../models/Postulante");

async function votoEnBlanco(id_votacion, tipoVotacion) {
  try {
    const postulaciones = await Postulante.find({
      usuario: {
        nombre: "Voto en blanco",
      },
      id_votacion: id_votacion,
    });

    if (tipoVotacion === "1") {
      let paramsVotacion = [];
      if (postulaciones.length == 0) {
        for (let i = 1; i <= 10; i++) {
          paramsVotacion.push({
            usuario: {
              nombre: "Voto en blanco",
            },
            id_votacion: id_votacion,
            propuesta: "",
            isAprobado: true,
            semestre: i,
          });
        }

        const postulacion = await Postulante.insertMany(paramsVotacion);
        console.log("voto en blanco creado correctamente");
      } else {
        console.log("Ya existe el voto en blanco");
      }
    } else {
      // Este 'else' es para las votaciones que no son de semestre o módulo
      if (postulaciones.length == 0) {
        let paramsVotacion = {
          usuario: {
            nombre: "Voto en blanco",
          },
          id_votacion: id_votacion,
          propuesta: "",
          isAprobado: true,
          semestre: 0,
        };

        const postulacion = new Postulante(paramsVotacion);
        await postulacion.save();
        console.log("voto en blanco creado correctamente");
      } else {
        console.log("Ya existe el voto en blanco");
      }
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
}
module.exports = { votoEnBlanco };
