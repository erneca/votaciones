<script setup>
defineProps({
  nombre: String,
  apellido: String,
  foto: Object,
  votos: Number,
  porcentaje: String,
  isGanador: Boolean,
});
</script>
<template>
  <div class="card">
    <div id="foto">
      <img src="../../../assets/37282.jpg" />
    </div>
    <h2 class="titleh2" id="nombre" v-if="isGanador == true">
      {{ nombre }} {{ apellido }} <i class="ri-vip-crown-fill"></i>
    </h2>
    <h2 class="titleh2" id="nombre" v-else>{{ nombre }} {{ apellido }}</h2>
    <div id="resultado">
      <div class="progressBar" :style="`width: ${porcentaje}%`">
        {{ porcentaje + 10 }} %
      </div>
      <p>{{ votos }} Votos</p>
    </div>
  </div>
</template>
<style scoped>
@import "../../../styles/components/titlesh#.css";
@import "./styles/cardResultados.css";
</style>
