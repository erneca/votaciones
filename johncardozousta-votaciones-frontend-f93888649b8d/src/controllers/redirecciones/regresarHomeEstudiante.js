import axios from "axios";
import router from "../../routes/routes";
import { votacionesStore } from "../../stores/votaciones";
import { tokenStore } from "../../stores/tokens";

export default async function returnHome() {
  // Llama al store para guardar las votaciones de manera local y el token del usuario
  let votaciones = votacionesStore();
  const tokens = tokenStore();
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
  // redirecciona a la pagina de inicio de los estudiantes
  router.replace({ path: "/e/home" });
}
