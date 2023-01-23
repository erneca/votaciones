import verHistoricoSecretaria from "../views/Secretaria/verHistoricoSecretaria.vue";
import verVotacionSecretearia from "../views/Secretaria/verVotacionSecretaria.vue";
import verPostulantesSecretaria from "../views/Secretaria/verPostulantes.vue";
import editarVotacionSecretaria from "../views/Secretaria/EditarVotacion.vue";
import HomeSecretaria from "../views/Secretaria/inicioSecretariaDivision.vue";
import verResultadosSecretaria from "../views/Secretaria/verResultados.vue";
import CrearVotacion from "../views/Secretaria/CrearVotacion.vue";

const routes = [
  {
    path: "/s/home",
    name: "home Secretaria de División",
    component: HomeSecretaria,
  },
  {
    path: "/s/votacion",
    name: "Crear Votación",
    component: CrearVotacion,
  },
  {
    path: "/s/votacion/:id/editar",
    name: "editarVotacionSecretaria",
    component: editarVotacionSecretaria,
  },
  {
    path: "/s/votacion/:id",
    name: "verVotacionSecretaria",
    component: verVotacionSecretearia,
  },
  {
    path: "/s/votacion/:id/logs",
    name: "verHistoricoSecretaria",
    component: verHistoricoSecretaria,
  },
  {
    path: "/s/votacion/:id/postulantes",
    name: "verPostulantesSecretaria",
    component: verPostulantesSecretaria,
  },
  {
    path: "/s/votacion/:id/Resultados",
    name: "verResultadosSecretaria",
    component: verResultadosSecretaria,
  },
];

export default routes;
