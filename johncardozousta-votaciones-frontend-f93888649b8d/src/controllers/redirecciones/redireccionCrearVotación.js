import {
  consultarNombres,
  consultarFacultades,
  consultarProgramas,
} from "../consultas/consultasCrearVotacion";
import router from "../../routes/routes";

export async function crearVotacion() {
  await consultarNombres();
  await consultarFacultades();
  router.replace({ path: "/s/votacion" });
}

export async function actualizarProgramas() {
  await consultarProgramas();
}

export async function crearVotacionSecretariaGeneral() {
  await consultarNombres();
  router.replace({ path: "/sg/votacion" });
}
