import { consultaCrearVotacionesStore } from "../stores/consultasCrearVotaciones";
import { votacionesStore } from "../stores/votaciones";
import { tokenStore } from "../stores/tokens";
import router from "../routes/routes";
import axios from "axios";

export async function enviarEstado(estado, path) {
  let votaciones = votacionesStore();
  const tokens = tokenStore();
  let res = await axios.put(
    `http://localhost:3001/votacion/${path}/estado`,
    {
      codigo: estado,
    },
    {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    }
  );
  votaciones.votacion = res.data;
}

export async function cancelarCambioDeEstado() {
  let ventana = document.getElementById("ventanaCambioEstado");
  ventana.classList.toggle("hidden");
}
