<script setup>
import { redirectPostulantesInformacion } from "../../controllers/redirecciones/redireccionPostulantes";
import { redirectResultadosInformacion } from "../../controllers/redirecciones/redireccionResultados";
import { redirectLogsInformacion } from "../../controllers/redirecciones/redireccionLogs";
import returnHome from "../../controllers/redirecciones/regresarHomeDecanos";
import { votacionesStore } from "../../stores/votaciones";
import router from "../../routes/routes";
import VerVotacion from "../components/verVotacion.vue";
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
@import "../../styles/components/buttons.css";
@import "../../styles/headerAdministrativos.css";
</style>
