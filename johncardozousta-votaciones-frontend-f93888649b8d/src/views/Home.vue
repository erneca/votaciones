<script setup>
import Login from "./components/formIniciarSesion.vue";
</script>

<template>
  <div class="home">
    <!-- Títulos secciones -->
    <h1 class="titleh1">SIV</h1>
    <!-- Icon -->
    <div>
      <h2 class="titleh2">
        Sistema integrado de votaciones de la Universidad Santo Tomás
      </h2>
      <br />
      <img
        src="../assets/Escudo_Usta.png"
        id="icon"
        alt="Logo de la Universidad Santo Tomás"
      />
      <br />
      <h3 class="titleh3">Iniciar sesión</h3>
    </div>
    <!-- Login Form -->
    <Login />
    <br />
    <h3 class="titleh3">
      Recuerde que su contraseña es la utilizada en aplicativo SAC
    </h3>
    <h3 class="titleh3">Universidad Santo Tomás © 2022</h3>
  </div>
</template>

<style scoped>
@import "../styles/components/titlesh#.css";
@import "../styles/components/init.css";
@import "../styles/login.css";
</style>
