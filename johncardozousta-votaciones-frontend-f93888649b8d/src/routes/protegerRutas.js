import router from "./routes";
import { tokenStore } from "../stores/tokens";

export async function protegerRutas(to) {
  let token = tokenStore();
  if (
    token.usuario.rol.codigo == 1 &&
    to.name != "home Estudiante" &&
    to.name != "Formulario de Postulación" &&
    to.name != "Formulario de Votación" &&
    to.name != "Resultados Votacion"
  ) {
    return { path: "/e/home" };
  } else if (
    token.usuario.rol.codigo == 2 &&
    to.name != "home Secretaria de División" &&
    to.name != "editarVotacionSecretaria" &&
    to.name != "verPostulantesSecretaria" &&
    to.name != "verResultadosSecretaria" &&
    to.name != "verHistoricoSecretaria" &&
    to.name != "verVotacionSecretaria" &&
    to.name != "Crear Votación"
  ) {
    return { path: "/s/home" };
  } else if (
    token.usuario.rol.codigo == 3 &&
    to.name != "home Decano de Facultad" &&
    to.name != "verVotacionDecano" &&
    to.name != "verHistoricoDecano" &&
    to.name != "verPostulantesDecano" &&
    to.name != "verResultadosDecano"
  ) {
    return { path: "/d/home" };
  } else if (
    token.usuario.rol.codigo == 4 &&
    to.name != "home Secretaria General" &&
    to.name != "verVotacionSecretariaGeneral" &&
    to.name != "verHistoricoSecretariaGeneral" &&
    to.name != "verPostulantesSecretariaGeneral" &&
    to.name != "verResultadosSecretariaGeneral" &&
    to.name != "Crear Votación SecretariaGeneral" &&
    to.name != "editarVotacionSecretariaGeneral"
  ) {
    return { path: "/sg/home" };
  }
}
