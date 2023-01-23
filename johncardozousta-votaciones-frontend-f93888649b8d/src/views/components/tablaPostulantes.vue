<script setup>
import { postulantesStore } from "../../stores/postulantes.js";
let postulantes = postulantesStore();
</script>

<template>
  <table class="tablaPostulantes">
    <thead>
      <th>Apellido</th>
      <th>Nombre</th>
      <th>Semestre</th>
    </thead>
    <tbody v-for="(postulante, index) in postulantes.postulantes" :key="index">
      <tr v-if="index % 2 == 0" class="par">
        <td>{{ postulante.usuario.apellido }}</td>
        <td>{{ postulante.usuario.nombre }}</td>
        <td>{{ postulante.semestre }}</td>
      </tr>
      <tr v-else class="impar">
        <td>{{ postulante.usuario.apellido }}</td>
        <td>{{ postulante.usuario.nombre }}</td>
        <td>{{ postulante.semestre }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import "../../styles/tablas/tablaPostulantes.css";
</style>
