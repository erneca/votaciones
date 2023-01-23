<script setup>
import { ref } from "vue";
import router from "../../routes/routes";
import {
  cancelarCambioDeEstado,
  enviarEstado,
} from "../../controllers/cambiarDeEstado";
import { ObtenerLogs } from "../../controllers/consultas/obtenerLogs";
import { consultaCrearVotacionesStore } from "../../stores/consultasCrearVotaciones";
defineProps({
  estadoActual: JSON,
});

const consultas = consultaCrearVotacionesStore();
let posibles = consultas.estados;

async function actualizarEstados(codigo, path) {
  await enviarEstado(codigo, path.params.id);
  await ObtenerLogs(path.params.id);
  posibles.$reset;
  if (path.path.includes("/logs")) {
    router.replace({ path: `/s/votacion/${path.params.id}` });
  } else {
    router.replace({ path: `/s/votacion/${path.params.id}/logs` });
  }
  router.go();
}
</script>

<template>
  <div class="ventanaEmergente hidden" id="ventanaCambioEstado">
    <p class="title">CAMBIAR ESTADOS</p>
    <p class="message">Estado Actual : {{ estadoActual.nombre }}</p>
    <div class="botones">
      <button
        v-for="posible in posibles"
        :key="posible"
        class="button enable buttonWidth30 aceptar"
        @click="actualizarEstados(posible.codigo, $route)"
      >
        Cambiar a estado {{ posible.nombre }}
      </button>
      <button
        class="button disable buttonWidth30 cancelar"
        @click="cancelarCambioDeEstado()"
      >
        CANCELAR
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "../../styles/cambiarEstado.css";
@import "../../styles/components/buttons.css";
@import "../../styles/components/confirmacion.css";
</style>
