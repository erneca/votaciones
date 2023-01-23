import router from "../../routes/routes";

export function redirectInformaciónHistorial(route) {
  router.replace({ path: route.path.replace("/logs", "") });
}

export function redirectInformaciónPostulantes(route) {
  router.replace({ path: route.path.replace("/postulantes", "") });
}

export function redirectInformaciónEditar(route) {
  router.replace({ path: route.path.replace("/editar", "") });
}

export async function redirectInformaciónResultados(route) {
  router.replace({ path: route.path.replace("/resultados", "") + "" });
}
