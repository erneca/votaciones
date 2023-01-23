import { postulantesStore } from "../../stores/postulantes";
import { votacionesStore } from "../../stores/votaciones";
import axios from "axios";
import { tokenStore } from "../../stores/tokens";

export async function obtenerResultados(idVotacion, codigoTipo) {
  try {
    let token = tokenStore();
    let postulantes = postulantesStore();
    if (idVotacion != null) {
      const postulaciones = await axios.get(
        `http://localhost:3001/consulta/${idVotacion}`,
        {
          headers: {
            authorization: `Bearer ${token.token}`,
          },
        }
      );
      const votaciones = votacionesStore();
      const votacion = votaciones.votaciones.find(
        (votacion) => votacion._id == idVotacion
      );
      postulantes.resultados = postulaciones.data;
      votaciones.votacion = votacion;
      if (votacion.tipo.codigo == "1") {
        let semestreActual = 0;
        let arrayNuevoSemestre = [];
        let todosSemestres = [];
        for (let candidato of postulantes.resultados) {
          if (candidato.semestre != semestreActual) {
            arrayNuevoSemestre = [];
            candidato.isGanador = true;
            arrayNuevoSemestre.push(candidato);
            todosSemestres.push(arrayNuevoSemestre);
            semestreActual = candidato.semestre;
          } else {
            candidato.isGanador = false;
            arrayNuevoSemestre.push(candidato);
          }
          postulantes.semestres = todosSemestres;
        }
        for (let semestre of todosSemestres) {
          let votos = 0;
          semestre.forEach((candidato) => (votos += candidato.votos));
          semestre.forEach(
            (candidato) =>
              (candidato.porcentaje = candidato.votos / votos - 0.1)
          );
        }
      } else {
        postulantes.resultados[0].isGanador = true;
        postulantes.semestres = [postulantes.resultados];
        for (let semestre of postulantes.semestres) {
          let votos = 0;
          semestre.forEach((candidato) => (votos += candidato.votos));
          semestre.forEach(
            (candidato) =>
              (candidato.porcentaje = candidato.votos / votos - 0.1)
          );
        }
      }
    }
  } catch (error) {
    let postulantes = postulantesStore();
    postulantes.resultados = [];
    postulantes.semestres = [];
    alert("La votación no esta en estado Cerrada");
  }
}
