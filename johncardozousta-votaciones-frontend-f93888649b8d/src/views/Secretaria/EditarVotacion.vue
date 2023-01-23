<script setup>
import { validarDatos } from "../../controllers/editarVotacion";
import { redirectInformaciónEditar } from "../../controllers/redirecciones/redireccionInformacion";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
import Confirmacion from "../components/confirmaciones/confirmacionEditarVotacion.vue";
import { ref } from "vue";

const form = ref({
  fecha_inicio: new Date().toISOString().substr(0, 10),
  fecha_fin: new Date().toISOString().substr(0, 10),
});
</script>

<template>
  <top />
  <Confirmacion :form="form" />
  <div class="form">
    <h1 class="titleh1Pequeño">Editar votación</h1>
    <br />
    <h2 class="titleh2">
      Fecha de inicio:
      <input
        v-model="form.fecha_inicio"
        type="date"
        class="input"
        id="fechaInicio"
        min="2022-04-01"
        max="2024-12-31"
      />
    </h2>
    <h2 class="titleh2">
      Fecha de finalización:
      <input
        v-model="form.fecha_fin"
        type="date"
        class="input"
        id="fechaFin"
        min="2022-04-01"
        max="2024-12-31"
      />
    </h2>
    <p class="error" id="error"></p>
    <br />
    <button class="button enable buttonWidth40" @click="validarDatos(form)">
      Editar
    </button>
    <button
      class="button disable buttonWidth40"
      @click="redirectInformaciónEditar($route)"
    >
      Cancelar
    </button>
  </div>
  <bot />
</template>

<style scoped>
@import "../../styles/components/buttons.css";
@import "../../styles/components/titlesh#.css";
@import "../../styles/components/input.css";
@import "../../styles/components/error.css";
@import "../../styles/crearVotacion.css";
</style>
