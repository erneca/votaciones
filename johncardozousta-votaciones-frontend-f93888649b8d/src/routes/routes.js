import SecretariaGeneralRoutes from "./SecretariaGeneral.routes";
import EstudianteRoutes from "./Estudiante.routes";
import SecretariaRoutes from "./Secretaria.routes";
import DecanoRoutes from "./Decano.routes";
import LoginRoutes from "./user.routes";

import { createRouter, createWebHistory } from "vue-router";
import { protegerRutas } from "./protegerRutas";
import { tokenStore } from "../stores/tokens";

let routes = [];
routes = routes.concat(LoginRoutes);
routes = routes.concat(SecretariaGeneralRoutes);
routes = routes.concat(EstudianteRoutes);
routes = routes.concat(SecretariaRoutes);
routes = routes.concat(DecanoRoutes);

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  let token = tokenStore();
  if (token.token == "" && to.name != "Login") {
    return { path: "/" };
  } else if (token.token != "") {
    return protegerRutas(to);
  }
});

export default router;
