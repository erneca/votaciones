<script setup>
import ConfirmarPostulantes from "../../components/confirmaciones/confirmacionAprobarPostulantes.vue";
import { postulantesStore } from "../../../stores/postulantes.js";
import { ref } from "vue";

defineProps({
  estado: Number,
});

let postulantes = postulantesStore();
let aprobados = ref([]);

function hacerRevision(aprobados) {
  let ventana = document.getElementById("ventanaEmergente");
  ventana.classList.toggle("hidden");
}
</script>

<template>
  <ConfirmarPostulantes :form="aprobados" />
  <table class="tablaPostulantes">
    <thead>
      <th>Apellido</th>
      <th>Nombre</th>
      <th>Semestre</th>
      <th>Estado</th>
      <th>Cambiar Estado</th>
    </thead>
    <tbody v-for="(postulante, index) in postulantes.postulantes" :key="index">
      <tr v-if="index % 2 == 0" class="par">
        <td>{{ postulante.usuario.apellido }}</td>
        <td>{{ postulante.usuario.nombre }}</td>
        <td>{{ postulante.semestre }}</td>
        <td v-if="postulante.isAprobado" class="postulacion">Aprobado</td>
        <td v-else class="cerrada">Desaprobado</td>
        <td>
          <input type="checkbox" :value="postulante._id" v-model="aprobados" />
        </td>
      </tr>
      <tr v-else class="impar">
        <td>{{ postulante.usuario.apellido }}</td>
        <td>{{ postulante.usuario.nombre }}</td>
        <td>{{ postulante.semestre }}</td>
        <td v-if="postulante.isAprobado" class="postulacion">Aprobado</td>
        <td v-else class="cerrada">Desaprobado</td>
        <td>
          <input type="checkbox" :value="postulante._id" v-model="aprobados" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="divBoton">
    <button
      class="button enable buttonWidth30"
      @click="hacerRevision(aprobados)"
    >
      Hacer Revisión
    </button>
  </div>
</template>

<style scoped>
@import "./styles/tablaRevision.css";
@import "../../../styles/components/colorStates.css";
@import "../../../styles/components/buttons.css";
</style>
