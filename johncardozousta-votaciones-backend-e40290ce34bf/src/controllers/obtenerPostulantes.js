const { Postulante } = require("../models/Postulante");
async function obtenerPostulantes(req, res) {
  try {
    let user = await req.jwtVerify();

    //TODO: realizar el sort jeje

    console.log(req.params.votacion);
    let postulantes;

    if (user.rol.codigo != 01) {
      //Postulantes para todos los roles menos el de estudiante
      postulantes = await Postulante.find({
        id_votacion: req.params.votacion,
      }).select("-id_votacion");
      res.status(200).send(postulantes);
    } else {
      //Postulantes para estudiantes
      //TODO: cambiar la forma de filtrado para las votaciones "dependientes"
      postulantes = await Postulante.find({
        id_votacion: req.params.votacion,
        semestre: user.semestre,
      }).select("-id_votacion");
      res.status(200).send(postulantes);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error en el servidor: ${error}`);
  }
}

module.exports = { obtenerPostulantes };
