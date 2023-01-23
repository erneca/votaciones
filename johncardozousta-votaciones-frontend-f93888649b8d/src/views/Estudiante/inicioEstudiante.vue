<script setup>
import CardVotacion from "./components/cardVotacion.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
import { votacionesStore } from "../../stores/votaciones.js";

const store = votacionesStore();
const votaciones = store.votaciones;
</script>

<template>
  <top />
  <div v-for="votacion in votaciones" :key="votacion">
    <CardVotacion
      :id="votacion._id"
      :nombre="votacion.tipo.nombre"
      :fecha_inicio="
        new Date(votacion.fecha_inicio.replace(/-/g, '\/').replace(/T.+/, ''))
      "
      :fecha_fin="
        new Date(votacion.fecha_fin.replace(/-/g, '\/').replace(/T.+/, ''))
      "
      :estado="votacion.estado"
      :periodo="votacion.periodo"
    />
  </div>
  <br /><br />
  <br /><br />
  <bot />
</template>
