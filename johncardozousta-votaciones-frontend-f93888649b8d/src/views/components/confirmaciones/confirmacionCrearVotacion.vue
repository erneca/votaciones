<script setup>
import { cancelar } from "../../../controllers/cancelar.js";
import { enviarVotacion } from "../../../controllers/CrearVotacion.js";
defineProps({
  form: JSON,
});
</script>

<template>
  <div class="ventanaEmergente hidden" id="ventanaEmergente">
    <p class="title">CONFIRMACIÓN</p>
    <p class="message">¿Esta seguro/a que desea crear esta votación?</p>
    <button
      id="aceptar"
      class="button enable buttonWidth30"
      @click="enviarVotacion(form)"
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
