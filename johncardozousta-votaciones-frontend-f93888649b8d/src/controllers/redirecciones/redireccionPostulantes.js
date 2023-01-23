import router from "../../routes/routes";
import { verificarPostulante } from "../consultas/obtenerPostulantes";

export async function redirectPostulantesInformacion(route, id) {
  verificarPostulante(id);
  router.replace({ path: route + "/postulantes" });
}

export async function redirectPostulantesHistorico(route, id) {
  verificarPostulante(id);
  router.replace({ path: route.replace("/logs", "") + "/postulantes" });
}

export async function redirectPostulantesResultados(route, id) {
  verificarPostulante(id);
  router.replace({ path: route.replace("/resultados", "") + "/postulantes" });
}
