import HomeStudent from "../views/Estudiante/inicioEstudiante.vue";
import VotacionEstudiante from "../views/Estudiante/formularioDeVotacion.vue";
import PostulacionEstudiante from "../views/Estudiante/formularioDePostulacion.vue";
import ResultadosEstudiante from "../views/Estudiante/resultados.vue";

const routes = [
  { path: "/e/home", name: "home Estudiante", component: HomeStudent },
  {
    path: "/e/votacion/:id/Postulación",
    name: "Formulario de Postulación",
    component: PostulacionEstudiante,
  },
  {
    path: "/e/votacion/:id/Votación",
    name: "Formulario de Votación",
    component: VotacionEstudiante,
  },
  {
    path: "/e/votacion/:id/Cerrada",
    name: "Resultados Votacion",
    component: ResultadosEstudiante,
  },
];

export default routes;
