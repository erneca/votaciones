<script setup>
import { votacionesStore } from "../../../stores/votaciones";
import router from "../../../routes/routes";
import { tokenStore } from "../../../stores/tokens";
import obtenerEstados from "../../../controllers/consultas/obtenerEstados";
import { consultaCrearVotacionesStore } from "../../../stores/consultasCrearVotaciones";
const votaciones = votacionesStore();
const consultas = consultaCrearVotacionesStore();

defineProps({
  prefix: String,
});
const user = tokenStore();
const rol = user.usuario.rol.codigo;

async function redirectVotacion(route, id) {
  const votacion = votaciones.votaciones.find((votacion) => votacion._id == id);
  votaciones.votacion = votacion;
  let estados = await obtenerEstados(id);
  consultas.estados = estados;
  router.replace({ path: route });
}
</script>

<template>
  <table class="tablaVotaciones">
    <thead>
      <th id="Nombre">Nombre</th>
      <th id="Periodo">Periodo</th>
      <th id="Estado">Estado</th>
      <th id="Sede">Sede</th>
      <th id="Division">División</th>
      <th id="Facultad">Facultad</th>
      <th id="Programa">Programa</th>
      <th id="Ver">Ver</th>
    </thead>
    <tbody v-for="(item, index) in votaciones.votaciones" :key="index">
      <tr v-if="index % 2 == 0" class="par">
        <td>{{ item.tipo.nombre }}</td>
        <td>{{ item.periodo }}</td>
        <td class="postulacion" v-if="item.estado.codigo == 1">
          {{ item.estado.nombre }}
        </td>
        <td class="revision" v-if="item.estado.codigo == 2">
          {{ item.estado.nombre }}
        </td>
        <td class="votacion" v-if="item.estado.codigo == 3">
          {{ item.estado.nombre }}
        </td>
        <td class="cerrada" v-if="item.estado.codigo == 4">
          {{ item.estado.nombre }}
        </td>
        <td>{{ item.programa.seccional }}</td>
        <td>{{ item.programa.division }}</td>
        <td>{{ item.programa.facultad }}</td>
        <td>{{ item.programa.nombre }}</td>
        <td>
          <button
            id="ver"
            @click="redirectVotacion(prefix + item._id, item._id)"
          >
            <i class="ri-eye-fill"></i>
          </button>
        </td>
      </tr>
      <tr v-else class="impar">
        <td>{{ item.tipo.nombre }}</td>
        <td>{{ item.periodo }}</td>
        <td class="postulacion" v-if="item.estado.codigo == 1">
          {{ item.estado.nombre }}
        </td>
        <td class="revision" v-if="item.estado.codigo == 2">
          {{ item.estado.nombre }}
        </td>
        <td class="votacion" v-if="item.estado.codigo == 3">
          {{ item.estado.nombre }}
        </td>
        <td class="cerrada" v-if="item.estado.codigo == 4">
          {{ item.estado.nombre }}
        </td>
        <td>{{ item.programa.seccional }}</td>
        <td>{{ item.programa.division }}</td>
        <td>{{ item.programa.facultad }}</td>
        <td>{{ item.programa.nombre }}</td>
        <td>
          <button
            id="ver"
            @click="redirectVotacion(prefix + item._id, item._id)"
          >
            <i class="ri-eye-fill"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import "./styles/tablaDeVotaciones.css";
@import "../../../styles/components/colorStates.css";
</style>
