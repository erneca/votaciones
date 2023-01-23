import jwt_decode from "jwt-decode";
import axios from "axios";
import { tokenStore } from "../stores/tokens";
import returnHome from "./redirecciones/regresarHomeEstudiante";

export async function validarPostulacion(propuesta) {
  let errorText = document.getElementById("error");

  if (propuesta != null && propuesta.length >= 30 && propuesta.length <= 800) {
    let ventana = document.getElementById("ventanaEmergente");
    ventana.classList.toggle("hidden");
  } else {
    errorText.innerHTML =
      "Por favor realize una propuesta entre 30 a 800 caracteres.";
    if (errorText.classList.contains("hidden")) {
      errorText.classList.toggle("hidden");
    }
  }
}

export async function enviarPropuesta(route, propuesta) {
  try {
    const tokens = tokenStore();
    await axios.post(
      `http://localhost:3001/votacion/${route.params.id}/postulacion`,
      {
        id_votacion: route.params.id,
        propuesta,
      },
      {
        headers: {
          authorization: `Bearer ${tokens.token}`,
        },
      }
    );
    returnHome();
  } catch (e) {
    let status = e.toJSON().status;
    if (status == 400) {
      alert(
        "Usted ya se ha postulado a esta votación, por favor espere a que acabe la etapa de postulación"
      );
    } else if (status == 406) {
      alert(
        "Existe algun campo vacio en la solicitud, vuelva a intentarlo más tarde"
      );
    } else {
      alert(e);
    }
  }
}
