import Login from "../views/Home.vue";
import CrearVotacion from "../views/Secretaria/CrearVotacion.vue";

export default [
  { path: "/", name: "Login", component: Login },
  { path: "/votacion", name: "Votacion", component: CrearVotacion },
];
