import { votacionesStore } from "../stores/votaciones";
import router from "../routes/routes";
import axios from "axios";

export async function verificarRol(tokens) {
  try {
    // Llama al store para guardar las votaciones de manera local
    let votaciones = votacionesStore();
    // verifica si es estudiante
    if (tokens.usuario.rol.codigo == 1) {
      // Pide las votaciones al Backend
      const vots = await axios.get(
        `http://localhost:3001/user/votacionesEstudiante`,
        {
          headers: {
            authorization: `Bearer ${tokens.token}`,
          },
        }
      );
      // guarda las Votaciones
      votaciones.votaciones = vots.data;
      votaciones.votacionesAll = vots.data;
      // redirecciona a la pagina de inicio del estudiante
      router.replace({ path: "/e/home" });
    }
    // verifica si es Secretaria de División
    else if (tokens.usuario.rol.codigo == 2) {
      // Pide las votaciones al Backend
      const vots = await axios.get(
        `http://localhost:3001/user/votacionesDivision`,
        {
          headers: {
            authorization: `Bearer ${tokens.token}`,
          },
        }
      );
      // guarda las Votaciones
      votaciones.votaciones = vots.data;
      votaciones.votacionesAll = vots.data;
      // redirecciona a la pagina de inicio de las Secretaria de División
      router.replace({ path: "/s/home" });
    }
    // verifica si es Decano de Facultad
    else if (tokens.usuario.rol.codigo == 3) {
      // Pide las votaciones al Backend
      const vots = await axios.get(
        `http://localhost:3001/user/votacionesDecanos`,
        {
          headers: {
            authorization: `Bearer ${tokens.token}`,
          },
        }
      );
      // guarda las Votaciones
      votaciones.votaciones = vots.data;
      votaciones.votacionesAll = vots.data;
      // redirecciona a la pagina de inicio de los Decanos
      router.replace({ path: "/d/home" });
    }
    // verifica si es Secretaria General
    else if (tokens.usuario.rol.codigo == 4) {
      // Pide las votaciones al Backend
      const vots = await axios.get(
        `http://localhost:3001/user/votacionesGeneral`,
        {
          headers: {
            authorization: `Bearer ${tokens.token}`,
          },
        }
      );
      // guarda las Votaciones
      votaciones.votaciones = vots.data;
      votaciones.votacionesAll = vots.data;
      // redirecciona a la pagina de inicio de la Secretaria General
      router.replace({ path: "/sg/home" });
    } else {
      // si no contiene un rol valido en el sistema muestra un error y redirecciona al formulario de inicio
      alert("Usuraio Invalido vuelva a intentarlo más tarde");
      router.replace({ path: "/" });
    }
  } catch (error) {
    alert(error);
  }
}
