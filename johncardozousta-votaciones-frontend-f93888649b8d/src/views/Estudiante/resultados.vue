<script setup>
import { postulantesStore } from "../../stores/postulantes";
import returnHome from "../../controllers/redirecciones/regresarHomeEstudiante";
import CardResultados from "./components/cardResultados.vue";
import Top from "../components/Header.vue";
import Bot from "../components/Footer.vue";
import { ref } from "vue";

let candidato = ref({
  _id: 69,
  usuario: {
    nombre: "Andres Nicolas",
    apellido: "Linares Chaparro",
  },
});

const postulantes = postulantesStore();
const resultados = postulantes.resultados;
let voto = ref("");
</script>

<template>
  <Top />
  <div class="form">
    <h1 class="titleh1Pequeño">Representante de estudiantes del programa</h1>
    <br />
    <div id="fechas">
      <p><b>INICIO: </b>2022.02.11</p>
      <p><b>FIN: </b>2022.02.25</p>
    </div>
    <br />
    <b>RESULTADOS</b>
    <br />
    <form class="radioSelect" v-for="candidato in resultados" :key="candidato">
      <input
        type="radio"
        :id="candidato._id"
        :value="candidato.usuario._id"
        v-model="voto"
      />
      <label for="candidato1">
        <CardResultados
          :nombre="candidato.usuario.nombre"
          :apellido="candidato.usuario.apellido"
          :foto="{ foto: 'nothing' }"
          :votos="candidato.votos"
          :porcentaje="Math.round(candidato.porcentaje * 100)"
          :isGanador="false"
        />
      </label>
    </form>
    <br />
    <p id="error" class="error"></p>
    <div id="botones">
      <button class="button enable buttonWidth30" @click="returnHome()">
        Regresar
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
