<script setup>
import { votacionesStore } from "../../../stores/votaciones";
import { ref } from "vue";
const votaciones = votacionesStore();
const filters = ref({
  nombre: "",
  periodo: "",
  estado: "",
  sede: "",
  division: "",
  facultad: "",
  programa: "",
});
function getFilters(filters) {
  let todasVotaciones = votaciones.votacionesAll;
  let votacionesFiltradas = [];
  if (filters.nombre != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.tipo.nombre
        .toUpperCase()
        .includes(filters.nombre.toUpperCase());
    });
  }
  if (filters.periodo != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.periodo == filters.periodo;
    });
  }
  if (filters.estado != "") {
    if (filters.estado == "0") {
      todasVotaciones = todasVotaciones.filter((votacion) => {
        return votacion.estado.codigo != filters.estado;
      });
    } else {
      todasVotaciones = todasVotaciones.filter((votacion) => {
        return votacion.estado.codigo == filters.estado;
      });
    }
  }
  if (filters.sede != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.programa.seccional
        .toUpperCase()
        .includes(filters.sede.toUpperCase());
    });
  }
  if (filters.division != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.programa.division
        .toUpperCase()
        .includes(filters.division.toUpperCase());
    });
  }
  if (filters.faultad != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.programa.facultad
        .toUpperCase()
        .includes(filters.facultad.toUpperCase());
    });
  }
  if (filters.programa != "") {
    todasVotaciones = todasVotaciones.filter((votacion) => {
      return votacion.programa.nombre
        .toUpperCase()
        .includes(filters.programa.toUpperCase());
    });
  }
  votaciones.votaciones = todasVotaciones;
}
</script>
<template>
  <div id="contenedorFiltros" class="filtro">
    <input
      class="input"
      id="filtroNombre"
      type="text"
      placeholder="Nombre"
      v-model="filters.nombre"
    />
    <input
      class="input"
      id="filtroPeriodo"
      type="number"
      placeholder="Periodo"
      v-model="filters.periodo"
    />
    <select
      class="input"
      name="filtroEstado"
      id="filtroEstado"
      v-model="filters.estado"
    >
      <option value="0">Todas</option>
      <option value="1">Postulacion</option>
      <option value="2">Revisión</option>
      <option value="3">votación</option>
      <option value="4">Cerrada</option>
    </select>
    <input
      class="input"
      id="filtroFacultad"
      type="text"
      placeholder="Facultad"
      v-model="filters.facultad"
    />
    <input
      class="input"
      id="filtroPrograma"
      type="text"
      placeholder="Programa"
      v-model="filters.programa"
    />
    <button class="button enable" id="buscar" @click="getFilters(filters)">
      <i class="ri-search-line"></i>
    </button>
  </div>
</template>
<style scoped>
@import "./styles/filtro.css";
@import "../../../styles/components/buttons.css";
@import "../../../styles/components/input.css";
</style>
