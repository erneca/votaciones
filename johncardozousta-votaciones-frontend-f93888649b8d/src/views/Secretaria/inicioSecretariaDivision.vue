<script setup>
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
import Filtro from "./components/filtro.vue";
import TablaDeVotaciones from "./components/tablaDeVotaciones.vue";
import router from "../../routes/routes";
import { crearVotacion } from "../../controllers/redirecciones/redireccionCrearVotación.js";
</script>

<template>
  <top />
  <div class="headerSecretaria">
    <h2>VOTACIONES</h2>
    <br />
    <button class="button enable buttonWidth20" @click="crearVotacion">
      CREAR VOTACIÓN
    </button>
    <br />
  </div>
  <div class="contentSecretaria">
    <Filtro />
    <TablaDeVotaciones prefix="/s/votacion/" />
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/components/buttons.css";
@import "../../styles/inicioSecretariaDivision.css";
</style>
