import HomeDecano from "../views/Decano/inicioDecanoFacultad.vue";
import verVotacionDecanos from "../views/Decano/verVotacionDecanos.vue";
import verHistoricoDecanos from "../views/Decano/verHistoricoDecanos.vue";
import verResultadosDecanos from "../views/Decano/verResultadosDecanos.vue";
import verPostulantesDecanos from "../views/Decano/verPostulantesDecanos.vue";

const routes = [
  {
    path: "/d/home",
    name: "home Decano de Facultad",
    component: HomeDecano,
  },
  {
    path: "/d/votacion/:id",
    name: "verVotacionDecano",
    component: verVotacionDecanos,
  },
  {
    path: "/d/votacion/:id/logs",
    name: "verHistoricoDecano",
    component: verHistoricoDecanos,
  },
  {
    path: "/d/votacion/:id/postulantes",
    name: "verPostulantesDecano",
    component: verPostulantesDecanos,
  },

  {
    path: "/d/votacion/:id/resultados",
    name: "verResultadosDecano",
    component: verResultadosDecanos,
  },
];

export default routes;
