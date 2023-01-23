import { postulantesStore } from "../../stores/postulantes";
import router from "../../routes/routes";
import axios from "axios";
import { tokenStore } from "../../stores/tokens";

export async function verificarPostulante(idVotacion) {
  try {
    let token = tokenStore();
    let postulantes = postulantesStore();
    if (idVotacion != null) {
      const postulaciones = await axios.get(
        `http://localhost:3001/votacion/${idVotacion}/postulantes`,
        {
          headers: {
            authorization: `Bearer ${token.token}`,
          },
        }
      );
      if (Array.isArray(postulaciones.data)) {
        postulantes.postulantes = postulaciones.data;
      } else {
        postulantes.postulantes = [postulaciones.data];
      }
    }
  } catch (error) {
    alert(error);
  }
}
