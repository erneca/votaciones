import axios from "axios";
import { tokenStore } from "../stores/tokens";
import jwt_decode from "jwt-decode";

import { verificarRol } from "./verificarRol";

/**
 * Esta función valida los datos de iniciar sesión, valida que el documento de identidad sea numerico.
 * @param {JSON} form este contiene la información digitada por el usuario {documento, passwordSac}.
 */
export async function iniciar(form) {
  let tokens = tokenStore();
  let spiner = document.getElementById("spiner");
  let errorText = document.getElementById("error");
  try {
    if (form.usuario != "" && form.pass != "") {
      // valida que el documento sea numerico
      if (parseInt(form.usuario)) {
        spiner.classList.toggle("hidden");
        // realiza peticion al servidor
        const res = await axios.post("http://localhost:3001/user/login", form);
        // guarda el token en pinia
        tokens.token = res.data;
        tokens.usuario = jwt_decode(res.data);
        // pide las votaciones del Estudiante;
        await verificarRol(tokens);
      } else {
        // cambia el mensaje de error
        errorText.innerHTML = "Documento invalido";
        // muestra un mensaje de error encima de los inputs
        if (errorText.classList.contains("hidden")) {
          errorText.classList.toggle("hidden");
        }
      }
    } else {
      // cambia el mensaje de error
      errorText.innerHTML = "Algun campo esta vacio";
      // muestra un mensaje de error encima de los inputs
      if (errorText.classList.contains("hidden")) {
        errorText.classList.toggle("hidden");
      }
    }
  } catch (e) {
    if (e.toJSON().status == 401) {
      // cambia el mensaje de error
      errorText.innerHTML = "Usuario o contraseña inválida";
      // muestra un mensaje de error encima de los inputs
      if (errorText.classList.contains("hidden")) {
        errorText.classList.toggle("hidden");
      }
      spiner.classList.toggle("hidden");
    } else {
      alert(e);
      spiner.classList.toggle("hidden");
      tokens.$reset();
      votaciones.$reset();
    }
  }
}
