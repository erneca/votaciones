<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import VentanaEmergente from "./components/confirmacionPostularse.vue";
import { validarPostulacion } from "../../controllers/enviarPostulacion.js";
import returnHome from "../../controllers/redirecciones/regresarHomeEstudiante.js";
import { inhabilidadesStore } from "../../stores/inabilidades.js";
import { ref } from "vue";
const propuesta = ref("");
const inhabilidadesS = inhabilidadesStore();
const inhabilidades = inhabilidadesS.inhabilidades;
</script>

<template>
  <Header />
  <VentanaEmergente :propuesta="propuesta" :route="$route" />
  <div class="form">
    <h1 class="titleh1Pequeño">POSTULACIÓN</h1>
    <h3 class="titleh2">Inhabilidades</h3>
    <p>
      Las encuentra en el siguiente enlace
      <a href="https://repository.usta.edu.co/handle/11634/16461"
        >Reglamento de elección de representantes
      </a>
    </p>
    <h3 class="titleh2">Propuesta</h3>
    <textarea id="propuesta" v-model="propuesta"></textarea>
    <p class="error" id="error"></p>
    <div id="botones">
      <button
        class="button enable buttonWidth40"
        @click="validarPostulacion(propuesta)"
      >
        Postularse
      </button>
      <button class="button disable buttonWidth40" @click="returnHome()">
        Cancelar
      </button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import "../../styles/tablas/tablaInabilidades.css";
@import "../../styles/components/titlesh#.css";
@import "../../styles/components/buttons.css";
@import "../../styles/components/error.css";
@import "../../styles/postulacion.css";
</style>
