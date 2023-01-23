<script setup>
import estadoVotacion from "../../../controllers/redirecciones/estadoVotacionEstudiante";
import estadoResultados from "../../../controllers/redirecciones/estadoResultados";
import { verificarPostulante } from "../../../controllers/consultas/obtenerPostulantes";
import { votacionesStore } from "../../../stores/votaciones";
import router from "../../../routes/routes";
defineProps({
  id: String,
  nombre: String,
  fecha_inicio: Date,
  fecha_fin: Date,
  estado: JSON,
  periodo: Number,
});
const votaciones = votacionesStore();

const redirect = (id, estado) => {
  const votacion = votaciones.votaciones.find((votacion) => votacion._id == id);
  votaciones.votacion = votacion;
  if (estado.codigo == 1) {
    router.replace(`/e/votacion/${id}/${estado.nombre}`);
  } else if (estado.codigo == 2) {
    alert(`Por favor espere hasta que el estado de ${estado.nombre} termine.`);
  } else if (estado.codigo == 3) {
    verificarPostulante(id);
    router.replace(`/e/votacion/${id}/${estado.nombre}`);
  } else if (estado.codigo == 4) {
    alert(`Por favor espere hasta que el estado de ${estado.nombre} termine.`);
  }
};
</script>

<template>
  <div class="card">
    <h2>{{ nombre }}</h2>
    <div>
      <div class="name">
        <h2>Periodo {{ periodo }}</h2>
      </div>
      <div class="info">
        <p>Inicio: {{ fecha_inicio.toLocaleDateString("es-CO") }}</p>
        <p>Fin: {{ fecha_fin.toLocaleDateString("es-CO") }}</p>
        <button
          class="button postulacion buttonWidth70"
          @click="redirect(id, estado)"
          v-if="estado.codigo == 1"
        >
          {{ estado.nombre }}
        </button>
        <button
          class="button revision buttonWidth70"
          @click="redirect(id, estado)"
          v-if="estado.codigo == 2"
        >
          {{ estado.nombre }}
        </button>
        <button
          class="button votacion buttonWidth70"
          @click="estadoVotacion(id, estado)"
          v-if="estado.codigo == 3"
        >
          {{ estado.nombre }}
        </button>
        <button
          class="button cerrada buttonWidth70"
          @click="estadoResultados(id, estado)"
          v-if="estado.codigo == 4"
        >
          {{ estado.nombre }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../../styles/components/colorStates.css";
@import "../../../styles/components/buttons.css";
@import "./styles/cardVotacion.css";
</style>
