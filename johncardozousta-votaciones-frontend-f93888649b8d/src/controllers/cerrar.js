import { tokenStore } from "../stores/tokens";
import { votacionesStore } from "../stores/votaciones";
import { consultaCrearVotacionesStore } from "../stores/consultasCrearVotaciones";
import { postulantesStore } from "../stores/postulantes";
import router from "../routes/routes";

export const cerrar = async () => {
  let tokens = tokenStore();
  let votaciones = votacionesStore();
  let consultas = consultaCrearVotacionesStore();
  let postulaciones = postulantesStore();
  tokens.$reset();
  votaciones.$reset();
  consultas.$reset();
  postulaciones.$reset();
  router.replace({ path: "/" });
};
