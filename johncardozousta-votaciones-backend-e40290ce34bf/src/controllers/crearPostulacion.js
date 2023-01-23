const { Postulante } = require("../models/Postulante");

async function crearPostulacion(req, res) {
  try {
    const user = await req.jwtVerify();
    console.log(user);
    const { id_votacion, propuesta } = req.body;

    //FIXME: ¿Se debe realizar validación si la votación existe o no?

    const postulaciones = await Postulante.find({
      usuario: {
        nombre: user.nombre,
        apellido: user.apellido,
      },
      id_votacion: id_votacion,
    });
    if (postulaciones.length == 0) {
      const paramsPostulacion = {
        usuario: {
          nombre: user.nombre,
          apellido: user.apellido,
        },
        id_votacion: id_votacion,
        propuesta: propuesta,
        isAprobado: false,
        isGanador: false,
        semestre: user.semestre,
      };
      const postulacion = new Postulante(paramsPostulacion);
      await postulacion.save();
      res.status(200).send("Se ha postulado correctamente a la votación");
    } else {
      res.status(400).send("Usted ya se ha postulado a esta votación");
    }
    // console.log(id_votacion, propuesta);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor ${error}`);
  }
}

module.exports = {
  crearPostulacion,
};
