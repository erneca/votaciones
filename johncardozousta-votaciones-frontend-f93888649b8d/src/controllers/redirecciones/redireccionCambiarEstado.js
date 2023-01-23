import obtenerEstados from "../consultas/obtenerEstados";
import { consultaCrearVotacionesStore } from "../../stores/consultasCrearVotaciones";

export async function redireccionarCambiarEstados(idVotacion) {
  const consultas = consultaCrearVotacionesStore();
  let estados = await obtenerEstados(idVotacion);
  consultas.estados = estados;
  let ventana = document.getElementById("ventanaCambioEstado");
  ventana.classList.toggle("hidden");
}
