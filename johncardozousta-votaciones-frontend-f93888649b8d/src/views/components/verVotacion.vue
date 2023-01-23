<script setup>
defineProps({
  votacion: JSON,
});
</script>

<template>
  <p><b>Nombre:</b> {{ votacion.tipo.nombre }}</p>
  <p>
    <b>Fecha de inicio:</b>
    {{
      new Date(
        votacion.fecha_inicio.replace(/-/g, "\/").replace(/T.+/, "")
      ).toLocaleDateString("es-CO")
    }}
  </p>
  <p>
    <b>Fecha de fin:</b>
    {{
      new Date(
        votacion.fecha_fin.replace(/-/g, "\/").replace(/T.+/, "")
      ).toLocaleDateString("es-CO")
    }}
  </p>
  <p><b>Periodo:</b> {{ votacion.periodo }}</p>
  <p>
    <b>Estado:</b>
    <span v-if="votacion.estado.codigo == 1" class="postulacion badges">{{
      votacion.estado.nombre
    }}</span>
    <span v-if="votacion.estado.codigo == 2" class="revision badges">{{
      votacion.estado.nombre
    }}</span>
    <span v-if="votacion.estado.codigo == 3" class="votacion badges">{{
      votacion.estado.nombre
    }}</span>
    <span v-if="votacion.estado.codigo == 4" class="cerrada badges">{{
      votacion.estado.nombre
    }}</span>
  </p>
  <p><b>Seccional:</b> {{ votacion.programa.seccional }}</p>
  <p><b>División:</b> {{ votacion.programa.division }}</p>
  <p><b>Facultad:</b> {{ votacion.programa.facultad }}</p>
  <p><b>Programa:</b> {{ votacion.programa.nombre }}</p>
</template>

<style scoped>
@import "../../styles/components/badges.css";
@import "../../styles/components/colorStates.css";
</style>
