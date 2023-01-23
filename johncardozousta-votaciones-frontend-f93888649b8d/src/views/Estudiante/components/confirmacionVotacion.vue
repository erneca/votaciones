<script setup>
import { enviarVoto } from "../../../controllers/votarCandidato.js";
import { cancelar } from "../../../controllers/cancelar.js";

import VotoExitoso from "./votoExitoso.vue";

defineProps({
  candidato: JSON,
});
</script>

<template>
  <VotoExitoso :candidato="candidato" />
  <div class="ventanaEmergente hidden" id="ventanaEmergente">
    <p class="title">CONFIRMACIÓN</p>
    <p class="message">
      ¿ Esta seguro/a que desea votar por {{ candidato.usuario.nombre }}
      {{ candidato.usuario.apellido }} ?
    </p>
    <button
      id="aceptar"
      class="button enable buttonWidth30"
      @click="enviarVoto($route, candidato)"
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
