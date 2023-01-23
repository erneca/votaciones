import HomeSecreGeneral from "../views/SecretariaGeneral/inicioSecretariaGeneral.vue";
import CrearVotacion from "../views/SecretariaGeneral/CrearVotacion.vue";
import editarVotacionSecretaria from "../views/SecretariaGeneral/EditarVotacion.vue";
import verVotacionSecreteariaGeneral from "../views/SecretariaGeneral/verVotacionSecretariaGeneral.vue";
import verHistoricoSecretariaGeneral from "../views/SecretariaGeneral/verHistoricoSecretariaGeneral.vue";
import verResultadosSecretariaGeneral from "../views/SecretariaGeneral/verResultadosSecretariaGeneral.vue";
import verPostulantesSecretariaGeneral from "../views/SecretariaGeneral/verPostulantesSecretariaGeneral.vue";

const routes = [
  {
    path: "/sg/home",
    name: "home Secretaria General",
    component: HomeSecreGeneral,
  },
  {
    path: "/sg/votacion/:id",
    name: "verVotacionSecretariaGeneral",
    component: verVotacionSecreteariaGeneral,
  },
  {
    path: "/sg/votacion/:id/logs",
    name: "verHistoricoSecretariaGeneral",
    component: verHistoricoSecretariaGeneral,
  },
  {
    path: "/sg/votacion/:id/postulantes",
    name: "verPostulantesSecretariaGeneral",
    component: verPostulantesSecretariaGeneral,
  },
  {
    path: "/sg/votacion/:id/resultados",
    name: "verResultadosSecretariaGeneral",
    component: verResultadosSecretariaGeneral,
  },
  {
    path: "/sg/votacion",
    name: "Crear Votación SecretariaGeneral",
    component: CrearVotacion,
  },
  {
    path: "/sg/votacion/:id/editar",
    name: "editarVotacionSecretariaGeneral",
    component: editarVotacionSecretaria,
  },
];

export default routes;
