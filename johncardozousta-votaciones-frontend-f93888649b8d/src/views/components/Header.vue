<script setup>
import { cerrar } from "../../controllers/cerrar.js";
import { tokenStore } from "../../stores/tokens";

let token = tokenStore();
</script>

<template>
  <div id="contenedor">
    <div id="logo">
      <img
        src="../../assets/Escudo_Usta.png"
        alt="Logo de la universidad Santo Tomás"
      />
      <h2>SIV</h2>
    </div>
    <div id="opciones">
      <i class="ri-user-fill"></i
      ><b>{{ token.usuario.nombre }} {{ token.usuario.apellido }}</b>
      <button @click="cerrar" id="cerrar">
        <i class="ri-logout-box-r-line"></i><b>Salir</b>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "../../styles/components/header.css";
</style>
