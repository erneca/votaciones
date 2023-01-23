<script setup>
import returnHome from "../../../controllers/redirecciones/regresarHomeEstudiante.js";
import { cancelar } from "../../../controllers/cancelar.js";

defineProps({
  candidato: JSON,
});
</script>

<template>
  <div class="ventanaMessage hidden" id="votoExitoso">
    <p class="title">VOTACIÓN</p>
    <p class="message">
      Usted ha votado por {{ candidato.usuario.nombre }}
      {{ candidato.usuario.apellido }}
    </p>
    <button class="button enable buttonWidth30" @click="returnHome()">
      Regresar
    </button>
  </div>
</template>

<style scoped>
@import "../../../styles/components/buttons.css";
@import "../../../styles/components/Emergente.css";
</style>
