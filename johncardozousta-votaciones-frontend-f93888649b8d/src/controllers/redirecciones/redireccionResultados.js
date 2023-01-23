import router from "../../routes/routes";
import { obtenerResultados } from "../consultas/obtenerResultados";

export async function redirectResultadosInformacion(route, id) {
  await obtenerResultados(id);
  router.replace({ path: route.path + "/resultados" });
}

export async function redirectResultadosPostulantes(route, id) {
  await obtenerResultados(id);
  router.replace({ path: route.path.replace("/postulantes", "/resultados") });
}

export async function redirectResultadosLogs(route, id) {
  await obtenerResultados(id);
  router.replace({ path: route.path.replace("/logs", "/resultados") });
}
