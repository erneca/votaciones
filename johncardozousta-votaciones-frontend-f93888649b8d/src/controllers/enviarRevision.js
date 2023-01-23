import axios from "axios";
import router from "../routes/routes";
import { tokenStore } from "../stores/tokens";
import { verificarPostulante } from "./consultas/obtenerPostulantes";

export async function enviarRevision(revision, path) {
  const tokens = tokenStore();
  let res = await axios.put(
    `http://localhost:3001/votacion/${path.params.id}/postulantes`,
    {
      postulantes: revision,
    },
    {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    }
  );
  await verificarPostulante(path.params.id);
  let ventana = document.getElementById("ventanaEmergente");
  ventana.classList.toggle("hidden");
  // FIXME: No redirecciona again
  // router.replace({ path: path.replace("/postulantes", "") });
  router.go();
}
