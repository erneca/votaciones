<script setup>
defineProps({
  nombre: String,
  apellido: String,
  foto: Object,
  propuesta: String,
});
</script>
<template>
  <div class="card">
    <div id="foto">
      <img v-if="propuesta == ''" src="../../../assets/blanco.jpg" />
      <img v-else src="../../../assets/37282.jpg" />
    </div>
    <h2 class="titleh2" id="nombre">{{ nombre }} {{ apellido }}</h2>
    <p id="propuesta">{{ propuesta }}</p>
  </div>
</template>
<style scoped>
@import "../../../styles/components/titlesh#.css";
@import "./styles/cardCandidato.css";
</style>
