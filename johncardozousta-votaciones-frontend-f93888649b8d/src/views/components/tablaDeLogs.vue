<script setup>
import { votacionesStore } from "../../stores/votaciones";
const votaciones = votacionesStore();
const logs = votaciones.logs;
</script>

<template>
  <table class="tablaLogs">
    <thead>
      <th>Fecha y hora</th>
      <th>Actor</th>
      <th>Acción</th>
    </thead>
    <tbody v-for="(item, index) in logs" :key="index">
      <tr v-if="index % 2 == 0" class="par">
        <td>{{ new Date(item.fecha).toLocaleString("es-CO") }}</td>
        <td>{{ item.usuario }}</td>
        <td>{{ item.descripcion }}</td>
      </tr>
      <tr v-else class="impar">
        <td>{{ new Date(item.fecha).toLocaleString("es-CO") }}</td>
        <td>{{ item.usuario }}</td>
        <td>{{ item.descripcion }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import "../../styles/Tablas/tablaLogs.css";
</style>
