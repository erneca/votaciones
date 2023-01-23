<script setup>
import { redirectPostulantesInformacion } from "../../controllers/redirecciones/redireccionPostulantes";
import { redirectResultadosInformacion } from "../../controllers/redirecciones/redireccionResultados";
import { redirectLogsInformacion } from "../../controllers/redirecciones/redireccionLogs";
import { votacionesStore } from "../../stores/votaciones";
import router from "../../routes/routes";
import HeaderSecretaria from "./components/headerSecretaria.vue";
import VerVotacion from "../components/verVotacion.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";

const store = votacionesStore();
const votacion = store.votacion;
</script>

<template>
  <top />
  <HeaderSecretaria :estado="votacion.estado" :idVotacion="votacion._id" />
  <div class="navVerVotacion">
    <b class="selected">Información</b>
    <p @click="redirectPostulantesInformacion($route.path, votacion._id)">
      Postulados
    </p>
    <p @click="redirectResultadosInformacion($route, votacion._id)">
      Resultados
    </p>
    <p @click="redirectLogsInformacion($route.path, votacion._id)">Historico</p>
  </div>
  <div class="contentSecretaria">
    <VerVotacion :votacion="votacion" />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/contenido.css";
</style>
