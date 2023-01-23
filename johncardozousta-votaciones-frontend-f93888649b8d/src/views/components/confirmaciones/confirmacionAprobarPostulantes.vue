<script setup>
import { enviarRevision } from "../../../controllers/enviarRevision";
import { postulantesStore } from "../../../stores/postulantes";
import { cancelar } from "../../../controllers/cancelar.js";
defineProps({
  form: Array,
});
let postulantes = postulantesStore();
let numeroPostulantes = postulantes.postulantes.length;
</script>

<template>
  <div class="ventanaEmergente hidden" id="ventanaEmergente">
    <p class="title">CONFIRMACIÓN</p>
    <p class="message">
      ¿Esta seguro/a que desea cambiar el estado de aprobación a
      {{ form.length }} de {{ numeroPostulantes }} postulados?
    </p>
    <button
      id="aceptar"
      class="button enable buttonWidth30"
      @click="enviarRevision(form, $route)"
    >
      ACEPTAR
    </button>
    <button
      id="cancelar"
      class="button disable buttonWidth30"
      @click="cancelar()"
    >
      CANCELAR
    </button>
  </div>
</template>

<style scoped>
@import "../../../styles/components/buttons.css";
@import "../../../styles/components/confirmacion.css";
</style>
