const { Votacion } = require("../models/Votacion");

//log
const { logEditarVotacion } = require("../controllers/logEditarVotacion");

async function editarVotacion(req, res) {
  try {
    const user = await req.jwtVerify();

    //Converts the dates from string to Date type
    let fecha1 = new Date(req.body.fecha_inicio);
    let fecha2 = new Date(req.body.fecha_fin);

    //Validate the date less or great
    if (fecha1.getTime() >= fecha2.getTime()) {
      res.status(500).send(`Error en las fechas`);
    } else {
      const votacionEditada = await Votacion.findByIdAndUpdate(
        req.params.votacion,
        {
          fecha_inicio: req.body.fecha_inicio,
          fecha_fin: req.body.fecha_fin,
        }
      );
      let votacion = await Votacion.findById(req.params.votacion)
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
            seccional: user.seccional.nombre,
            division: user.division.nombre,
          },
          select: "nombre seccional division facultad -_id",
        });
      await logEditarVotacion(
        user,
        req.params.votacion,
        req.body.fecha_inicio,
        req.body.fecha_fin
      );
      res.status(200).send(votacion);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`ERROR: ${error}`);
  }
}

module.exports = {
  editarVotacion,
};
