<script setup>
import returnHome from "../../controllers/redirecciones/regresarHomeEstudiante";
import { validarVoto } from "../../controllers/votarCandidato.js";
import Confirmar from "./components/confirmacionVotacion.vue";
import CardCandidatos from "./components/cardCandidatos.vue";
import { postulantesStore } from "../../stores/postulantes";
import { votacionesStore } from "../../stores/votaciones";
import Top from "../components/Header.vue";
import Bot from "../components/Footer.vue";
import { ref } from "vue";
const votaciones = votacionesStore();
const postulantes = postulantesStore();
const candidatos = postulantes.postulantes;
let voto = ref({
  usuario: {
    nombre: "",
    apellido: "",
  },
});
let votacion = votaciones.votacion;
</script>

<template>
  <Top />
  <div class="form">
    <Confirmar :candidato="voto" />
    <h1 class="titleh1Pequeño">{{ votacion.tipo.nombre }}</h1>
    <br />
    <div id="fechas">
      <p>
        <b>INICIO: </b
        >{{
          new Date(
            votacion.fecha_inicio.replace(/-/g, "\/").replace(/T.+/, "")
          ).toLocaleDateString("es-CO")
        }}
      </p>
      <p>
        <b>FIN: </b
        >{{
          new Date(
            votacion.fecha_fin.replace(/-/g, "\/").replace(/T.+/, "")
          ).toLocaleDateString("es-CO")
        }}
      </p>
    </div>
    <br />
    <b>CANDIDATOS</b>
    <p>
      Para seleccionar a un candidato, debe hacer click sobre el candidato y se
      coleara de verde.
    </p>
    <br />
    <form class="radioSelect">
      <div v-for="candidato in candidatos" :key="candidato">
        <input
          type="radio"
          :id="candidato._id"
          :value="candidato"
          v-model="voto"
        />
        <label :for="candidato._id">
          <CardCandidatos
            :nombre="candidato.usuario.nombre"
            :apellido="candidato.usuario.apellido"
            :foto="{ foto: 'nothing' }"
            :propuesta="candidato.propuesta"
          />
        </label>
      </div>
    </form>
    <br />
    <p id="error" class="error"></p>
    <div id="botones">
      <button
        class="button enable buttonWidth30"
        @click="validarVoto($route, voto)"
      >
        Votar
      </button>
      <button class="button disable buttonWidth30" @click="returnHome()">
        Cancelar
      </button>
    </div>
  </div>
  <Bot />
</template>

<style scoped>
@import "../../styles/components/titlesh#.css";
@import "../../styles/components/buttons.css";
@import "../../styles/components/error.css";
@import "../../styles/votacion.css";
</style>
