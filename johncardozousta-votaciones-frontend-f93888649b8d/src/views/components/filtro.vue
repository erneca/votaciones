<script setup></script>
<template>
  <div id="contenedorFiltros" class="filtro">
    <input class="input" id="filtroNombre" type="text" placeholder="Nombre" />
    <input class="input" id="filtroPeriodo" type="text" placeholder="Periodo" />
    <input class="input" id="filtroEstado" type="text" placeholder="Estado" />
    <input class="input" id="filtroSede" type="text" placeholder="Sede" />
    <input
      class="input"
      id="filtroDivision"
      type="text"
      placeholder="División"
    />
    <input
      class="input"
      id="filtroFacultad"
      type="text"
      placeholder="Facultad"
    />
    <input
      class="input"
      id="filtroPrograma"
      type="text"
      placeholder="Programa"
    />
    <button class="button enable" id="buscar">
      <i class="ri-search-line"></i>
    </button>
  </div>
</template>
<style scoped>
@import "../../styles/filtro.css";
@import "../../styles/components/buttons.css";
@import "../../styles/components/input.css";
</style>
