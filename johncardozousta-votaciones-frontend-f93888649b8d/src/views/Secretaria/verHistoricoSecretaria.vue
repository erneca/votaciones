<script setup>
import { redirectInformaciónHistorial } from "../../controllers/redirecciones/redireccionInformacion";
import { redirectPostulantesHistorico } from "../../controllers/redirecciones/redireccionPostulantes";
import { redirectResultadosLogs } from "../../controllers/redirecciones/redireccionResultados";
import HeaderSecretaria from "./components/headerSecretaria.vue";
import { votacionesStore } from "../../stores/votaciones";
import TablaDeLogs from "../components/tablaDeLogs.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";

const store = votacionesStore();
const votacion = store.votacion;
</script>

<template>
  <top />
  <HeaderSecretaria :estado="votacion.estado" :idVotacion="votacion._id" />
  <div class="navVerVotacion">
    <p @click="redirectInformaciónHistorial($route)">Información</p>
    <p @click="redirectPostulantesHistorico($route.path, votacion._id)">
      Postulados
    </p>
    <p @click="redirectResultadosLogs($route, votacion._id)">Resultados</p>
    <b class="selected">Historico</b>
  </div>
  <div class="contentSecretaria">
    <TablaDeLogs />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/components/buttons.css";
@import "../../styles/contenido.css";
</style>
