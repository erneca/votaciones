<script setup>
import { redirectInformaciónPostulantes } from "../../controllers/redirecciones/redireccionInformacion";
import { redirectResultadosPostulantes } from "../../controllers/redirecciones/redireccionResultados";
import { redirectLogsPostulacion } from "../../controllers/redirecciones/redireccionLogs";
import returnHome from "../../controllers/redirecciones/regresarHomeDecanos";
import { votacionesStore } from "../../stores/votaciones";
import router from "../../routes/routes";
import TablaDePostulantes from "../components/tablaPostulantes.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";

const store = votacionesStore();
const votacion = store.votacion;
</script>

<template>
  <top />
  <div class="headerAdministrativos">
    <button @click="returnHome()" id="ver">
      <i class="ri-arrow-left-s-line"></i>
    </button>
    <h2>CONSULTAR VOTACIÓN</h2>
  </div>
  <div class="navVerVotacion">
    <p @click="redirectInformaciónPostulantes($route)">Información</p>
    <b class="selected">Postulados</b>
    <p @click="redirectResultadosPostulantes($route, votacion._id)">
      Resultados
    </p>
    <p @click="redirectLogsPostulacion($route.path, votacion._id)">Historico</p>
  </div>
  <div class="contentSecretaria">
    <TablaDePostulantes />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/contenido.css";
@import "../../styles/components/buttons.css";
@import "../../styles/headerAdministrativos.css";
</style>
