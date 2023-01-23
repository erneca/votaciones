const { Votacion } = require("../models/Votacion");

async function encontrarVotacionesEstudiante(req, res) {
  try {
    let user = await req.jwtVerify();

    //FIXME: Arreglar el filtrado de votaciones

    let votaciones = await Votacion.find({
      // "tipo.opciones": user.semestre,
    })
      .populate({
        path: "tipo",
        select: "nombre nombreDelTipo inabilidades -_id",
      })
      .populate({
        path: "estado",
        select: "nombre codigo -_id",
      })
      .populate({
        path: "programa",
        match: {
          nombre: user.programa.nombre,
          seccional: user.seccional.nombre,
          division: user.division.nombre,
          facultad: user.facultad.nombre,
        },
        select: "nombre seccional division facultad -_id",
      });
    // .populate({
    //   path: "tipo",
    //   match: {
    //     opciones: [user.semestre],
    //   },
    //   select: "nombre -_id",
    // });

    votaciones = votaciones.filter((votacion) => votacion.programa != null);

    //TODO: enviar los usuarios postulados filtrados por semestre
    // votaciones = votaciones.filter(
    //   (votacion) =>
    //     votacion.tipo.codigo != 1 && votacion.tipo.opciones == user.semestre
    // );
    res.status(200).send(votaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}
module.exports = {
  encontrarVotacionesEstudiante,
};
