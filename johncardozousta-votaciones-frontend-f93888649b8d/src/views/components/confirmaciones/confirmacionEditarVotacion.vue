<script setup>
import { cancelar } from "../../../controllers/cancelar.js";
import { editarVotacion } from "../../../controllers/editarVotacion";
defineProps({
  form: JSON,
});
</script>

<template>
  <div class="ventanaEmergente hidden" id="ventanaEmergente">
    <p class="title">CONFIRMACIÓN</p>
    <p class="message">¿Esta seguro/a que desea editar esta votación?</p>
    <button
      id="aceptar"
      class="button enable buttonWidth30"
      @click="editarVotacion(form, $route)"
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
