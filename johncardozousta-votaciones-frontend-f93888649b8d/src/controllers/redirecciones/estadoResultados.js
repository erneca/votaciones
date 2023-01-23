import { obtenerResultados } from "../consultas/obtenerResultados";
import { postulantesStore } from "../../stores/postulantes";
import { votacionesStore } from "../../stores/votaciones";
import router from "../../routes/routes";

export default async (id, estado) => {
  const postulantes = postulantesStore();
  const votaciones = votacionesStore();
  const votacion = votaciones.votaciones.find((votacion) => votacion._id == id);
  votaciones.votacion = votacion;
  await obtenerResultados(id);
  postulantes.postulantes.push({
    _id: 0,
    usuario: { nombre: "Voto en", apellido: "blanco" },
    propuesta: "",
  });
  if (estado.codigo != 2) {
    router.replace(`/e/votacion/${id}/${estado.nombre}`);
  } else {
    alert(`Por favor espere hasta que el estado de ${estado.nombre} termine.`);
  }
};
