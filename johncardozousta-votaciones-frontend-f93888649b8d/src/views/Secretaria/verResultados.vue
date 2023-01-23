<script setup>
import { redirectPostulantesResultados } from "../../controllers/redirecciones/redireccionPostulantes";
import { redirectInformaciónResultados } from "../../controllers/redirecciones/redireccionInformacion";
import { redirectLogsResultados } from "../../controllers/redirecciones/redireccionLogs";
import { postulantesStore } from "../../stores/postulantes.js";
import { votacionesStore } from "../../stores/votaciones";
import HeaderSecretaria from "./components/headerSecretaria.vue";
import CardResultados from "../components/cardResultados.vue";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
import { ref } from "vue";

const store = votacionesStore();
const votacion = store.votacion;
const postulantes = postulantesStore();
const resultadosSemestres = postulantes.semestres;
</script>

<template>
  <top />
  <HeaderSecretaria :estado="votacion.estado" :idVotacion="votacion._id" />
  <div class="navVerVotacion">
    <p @click="redirectInformaciónResultados($route)">Información</p>
    <p @click="redirectPostulantesResultados($route.path, votacion._id)">
      Postulados
    </p>
    <b class="selected">Resultados</b>
    <p @click="redirectLogsResultados($route.path, votacion._id)">Historico</p>
  </div>
  <div class="contentSecretaria">
    <form
      class="radioSelect"
      v-for="semestre in resultadosSemestres"
      :key="semestre"
    >
      <h2 class="titleh1Pequeño" v-if="votacion.tipo.codigo == '1'">
        Votacion para el semestre {{ semestre[0].semestre }}
      </h2>
      <div v-for="candidato in semestre" :key="candidato">
        <label for="candidato1">
          <CardResultados
            :nombre="candidato.usuario.nombre"
            :apellido="candidato.usuario.apellido"
            :foto="{ foto: 'nothing' }"
            :votos="candidato.votos"
            :porcentaje="Math.round(candidato.porcentaje * 100)"
            :isGanador="candidato.isGanador"
          />
        </label>
      </div>
    </form>
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/components/titlesh#.css";
@import "../../styles/contenido.css";
@import "../../styles/votacion.css";
</style>
