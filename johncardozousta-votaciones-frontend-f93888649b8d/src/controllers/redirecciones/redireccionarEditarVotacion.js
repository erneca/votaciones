import router from "../../routes/routes";

export async function editarSecreteria(id) {
  router.replace({ path: `/s/votacion/${id}/editar` });
}

export async function editarSecreteriaGeneral(id) {
  router.replace({ path: `/sg/votacion/${id}/editar` });
}
