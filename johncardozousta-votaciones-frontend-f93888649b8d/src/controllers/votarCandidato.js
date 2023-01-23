import jwt_decode from "jwt-decode";
import axios from "axios";
import { tokenStore } from "../stores/tokens";
import returnHome from "./redirecciones/regresarHomeEstudiante";

export async function validarVoto(route, candidato) {
  let errorText = document.getElementById("error");
  if (candidato.usuario.nombre != "") {
    let ventana = document.getElementById("ventanaEmergente");
    ventana.classList.toggle("hidden");
  } else {
    errorText.innerHTML = "Por favor seleccione un candidato";
    if (errorText.classList.contains("hidden")) {
      errorText.classList.toggle("hidden");
    }
  }
}

export async function enviarVoto(route, candidato) {
  try {
    let ventana = document.getElementById("ventanaEmergente");
    let ventanaExitoso = document.getElementById("votoExitoso");
    ventana.classList.toggle("hidden");
    const tokens = tokenStore();
    await axios.post(
      `http://localhost:3001/votacion/${route.params.id}/postulante/${candidato._id}`,
      {
        id_votacion: route.params.id,
        candidato,
      },
      {
        headers: {
          authorization: `Bearer ${tokens.token}`,
        },
      }
    );
    ventanaExitoso.classList.toggle("hidden");
  } catch (e) {
    let status = e.toJSON().status;
    if (status == 400) {
      alert(
        "Usted ya ha votado en esta votación, por favor espere ha que termine el periodo de votación para conocer los resultados de la votación"
      );
      returnHome();
    } else if (status == 406) {
      alert(
        "Existe algun campo vacio en la solicitud, vuelva a intentarlo más tarde"
      );
    } else {
      alert(e);
    }
  }
}
