import axios from "axios";
import { votacionesStore } from "../../stores/votaciones";
import { tokenStore } from "../../stores/tokens";

export async function ObtenerLogs(id) {
  try {
    // Llama al store para guardar las votaciones de manera local y el token del usuario
    let votaciones = votacionesStore();
    const tokens = tokenStore();
    // se obtiene los logs de la votación por su id
    const logs = await axios.get(`http://localhost:3001/votacion/${id}/log`, {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    });
    // Guarda los logs en el store de votaciones
    if (logs.data.length != 0) {
      votaciones.logs = logs.data;
    } else {
      votaciones.logs = [
        {
          fecha: new Date(),
          usuario: "Sistema",
          descripcion:
            "Esta votación es de una antigua versión por lo que no tiene logs",
        },
      ];
    }
  } catch (e) {
    alert(e);
  }
}
