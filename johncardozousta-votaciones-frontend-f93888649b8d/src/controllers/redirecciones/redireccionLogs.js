import { ObtenerLogs } from "../consultas/obtenerLogs";
import router from "../../routes/routes";

export async function redirectLogsInformacion(route, id) {
  await ObtenerLogs(id);
  router.replace({ path: route + "/logs" });
}

export async function redirectLogsPostulacion(route, id) {
  await ObtenerLogs(id);
  router.replace({ path: route.replace("/postulantes", "") + "/logs" });
}

export async function redirectLogsResultados(route, id) {
  await ObtenerLogs(id);
  router.replace({ path: route.replace("/resultados", "") + "/logs" });
}
