import axios from "axios";
import { tokenStore } from "../stores/tokens";
import { votacionesStore } from "../stores/votaciones";
import { redirectInformaciónEditar } from "./redirecciones/redireccionInformacion";

export async function validarDatos(form) {
  const tokens = tokenStore();
  let error = 0;
  let errorText = document.getElementById("error");
  try {
    // verifica que no tenga ningun valor vacio.
    if (form.fecha_inicio == "") {
      error++;
    }
    if (form.fecha_fin == "") {
      error++;
    }
    if (error == 0) {
      let fecha_inicio = new Date(form.fecha_inicio);
      let fecha_fin = new Date(form.fecha_fin);
      if (fecha_fin.getTime() < fecha_inicio.getTime()) {
        // cambia el mensaje de error
        errorText.innerHTML = "las fechas esta incorrectas";
        // muestra un mensaje de error encima de los inputs
        if (errorText.classList.contains("hidden")) {
          errorText.classList.toggle("hidden");
        }
      } else {
        let ventana = document.getElementById("ventanaEmergente");
        ventana.classList.toggle("hidden");
      }
    } else {
      // cambia el mensaje de error
      errorText.innerHTML = "Algún campo esta Vacio";
      // muestra un mensaje de error encima de los inputs
      if (errorText.classList.contains("hidden")) {
        errorText.classList.toggle("hidden");
      }
    }
  } catch (error) {
    alert(error);
  }
}

export async function editarVotacion(form, path) {
  const votaciones = votacionesStore();
  const tokens = tokenStore();
  let res = await axios.put(
    `http://localhost:3001/votacion/${path.params.id}/editar`,
    {
      fecha_fin: form.fecha_fin,
      fecha_inicio: form.fecha_inicio,
    },
    {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    }
  );
  // guarda las Votaciones
  votaciones.votacion = res.data;
  redirectInformaciónEditar(path);
}
