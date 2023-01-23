<script setup>
import { redirectInformaciónPostulantes } from "../../controllers/redirecciones/redireccionInformacion";
import { redirectResultadosPostulantes } from "../../controllers/redirecciones/redireccionResultados";
import { redirectLogsPostulacion } from "../../controllers/redirecciones/redireccionLogs";
import { votacionesStore } from "../../stores/votaciones";
import HeaderSecretaria from "./components/headerSecretaria.vue";
import TablaDeRevision from "./components/tablaRevision.vue";
import TablaDePostulantes from "./components/tablaPostulantes.vue";
import router from "../../routes/routes";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";

const store = votacionesStore();
const votacion = store.votacion;
</script>

<template>
  <top />
  <HeaderSecretaria :estado="votacion.estado" :idVotacion="votacion._id" />
  <div class="navVerVotacion">
    <p @click="redirectInformaciónPostulantes($route)">Información</p>
    <b class="selected">Postulados</b>
    <p @click="redirectResultadosPostulantes($route, votacion._id)">
      Resultados
    </p>
    <p @click="redirectLogsPostulacion($route.path, votacion._id)">Historico</p>
  </div>
  <div class="contentSecretaria">
    <TablaDeRevision v-if="votacion.estado.codigo == 2" />
    <TablaDePostulantes v-else />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/components/buttons.css";
@import "../../styles/contenido.css";
</style>
