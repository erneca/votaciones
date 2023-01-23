<script setup>
import { redirectInformaciónHistorial } from "../../controllers/redirecciones/redireccionInformacion";
import { redirectPostulantesHistorico } from "../../controllers/redirecciones/redireccionPostulantes";
import { redirectResultadosLogs } from "../../controllers/redirecciones/redireccionResultados";
import returnHome from "../../controllers/redirecciones/regresarHomeDecanos";
import { votacionesStore } from "../../stores/votaciones";
import TablaDeLogs from "../components/tablaDeLogs.vue";
import router from "../../routes/routes";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";

const store = votacionesStore();
const votacion = store.votacion;
function redirectInformación(route) {
  router.replace({ path: route.path.replace("/logs", "") });
}
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
    <p @click="redirectInformaciónHistorial($route, votacion._id)">
      Información
    </p>
    <p @click="redirectPostulantesHistorico($route.path, votacion._id)">
      Postulados
    </p>
    <p @click="redirectResultadosLogs($route)">Resultados</p>
    <b class="selected">Historico</b>
  </div>
  <div class="contentSecretaria">
    <TablaDeLogs />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/contenido.css";
@import "../../styles/components/buttons.css";
@import "../../styles/headerAdministrativos.css";
</style>
