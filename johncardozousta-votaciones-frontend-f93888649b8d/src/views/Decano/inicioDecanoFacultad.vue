<script setup>
import Filtro from "./components/filtro.vue";
import TablaDeVotaciones from "./components/tablaDeVotaciones.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
</script>
<template>
  <top />
  <div class="headerAdministrativos">
    <h2>VOTACIONES</h2>
    <br />
  </div>
  <div class="contentAdministrativos">
    <Filtro />
    <TablaDeVotaciones prefix="/d/votacion/" />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/inicioAdministritativos.css";
</style>
