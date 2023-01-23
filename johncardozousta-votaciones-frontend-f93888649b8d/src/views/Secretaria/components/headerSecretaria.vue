<script setup>
import { redireccionarCambiarEstados } from "../../../controllers/redirecciones/redireccionCambiarEstado";
import { editarSecreteria } from "../../../controllers/redirecciones/redireccionarEditarVotacion";
import returnHome from "../../../controllers/redirecciones/regresarHomeSecretaria";
import CambiarEstados from "../../components/CambiarEstados.vue";

defineProps({
  estado: JSON,
  idVotacion: String,
});
</script>

<template>
  <div class="headerSecretaria">
    <CambiarEstados :estadoActual="estado" />
    <button @click="returnHome()" id="ver">
      <i class="ri-arrow-left-s-line"></i>
    </button>
    <h2>CONSULTAR VOTACIÓN</h2>
    <br />
    <button
      class="button enable buttonWidth15"
      @click="editarSecreteria(idVotacion)"
    >
      EDITAR VOTACIÓN
    </button>
    <button
      class="button enable buttonWidth15"
      @click="redireccionarCambiarEstados(idVotacion, estado)"
    >
      CAMBIAR ESTADO
    </button>
    <br />
  </div>
</template>

<style scoped>
@import "../../../styles/components/buttons.css";
@import "../../../styles/headerSecretaria.css";
</style>
