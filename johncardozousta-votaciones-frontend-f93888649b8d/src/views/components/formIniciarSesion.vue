<script setup>
import { iniciar } from "../../controllers/iniciar.js";
import { ref } from "vue";
const form = ref({
  usuario: "",
  pass: "",
});
</script>

<template>
  <form v-on:submit.prevent="login" class="form">
    <div id="spiner" class="hidden"></div>
    <p id="error" class="error"></p>
    <input
      type="text"
      class="input"
      placeholder="Documento de identidad"
      v-model="form.usuario"
    />
    <input
      type="password"
      class="input"
      placeholder="Contraseña SAC"
      v-model="form.pass"
    />
    <button class="enable button buttonWidth100" @click="iniciar(form)">
      Ingresar
    </button>
  </form>
</template>

<style scoped>
@import "../../styles/login.css";
@import "../../styles/components/error.css";
@import "../../styles/components/buttons.css";
@import "../../styles/components/input.css";
@import "../../styles/components/spiner.css";
</style>
