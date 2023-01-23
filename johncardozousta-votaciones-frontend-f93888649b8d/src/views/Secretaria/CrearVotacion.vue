<script setup>
import { consultaCrearVotacionesStore } from "../../stores/consultasCrearVotaciones";
import {
  consultarProgramas,
  consultarDependientes,
} from "../../controllers/consultas/consultasCrearVotacion";
import { validarDatos } from "../../controllers/CrearVotacion";
import returnHome from "../../controllers/redirecciones/regresarHomeSecretaria";
import top from "../components/Header.vue";
import bot from "../components/Footer.vue";
import Confirmacion from "../components/confirmaciones/confirmacionCrearVotacion.vue";
import { ref } from "vue";

const crearVotacion = consultaCrearVotacionesStore();
const today = new Date().toISOString().substr(0, 10);
const form = ref({
  tipoDeVotacionSeleccionado: "",
  facultadSeleccionada: "",
  programaSelecionado: "",
  fecha_inicio: new Date().toISOString().substr(0, 10),
  fecha_fin: new Date().toISOString().substr(0, 10),
});
async function changeDependientes(event) {
  await consultarDependientes(form._value.tipoDeVotacionSeleccionado);
}
async function changePrograma(event) {
  await consultarProgramas(form._value.facultadSeleccionada);
}
</script>

<template>
  <top />
  <Confirmacion :form="form" />
  <div class="form">
    <h1 class="titleh1Pequeño">Crear votación</h1>
    <br />
    <h2 class="titleh2">
      Tipo de votación:
      <select class="input" v-model="form.tipoDeVotacionSeleccionado">
        <option
          v-for="nombre in crearVotacion.nombres"
          :key="nombre"
          :value="nombre"
        >
          {{ nombre.nombre }}
        </option>
      </select>
    </h2>
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
    <h2 class="titleh2">
      Facultad:
      <select
        class="input"
        v-model="form.facultadSeleccionada"
        @change="changePrograma($event)"
      >
        <option
          v-for="facultad in crearVotacion.facultades"
          :key="facultad"
          :value="facultad"
        >
          {{ facultad.nombre }}
        </option>
      </select>
    </h2>
    <h2 class="titleh2">
      Programa:
      <select class="input" v-model="form.programaSelecionado">
        <option
          v-for="programa in crearVotacion.programas"
          :key="programa"
          :value="programa"
        >
          {{ programa.nombre }}
        </option>
      </select>
    </h2>
    <!-- <h2 class="titleh2">
      Tipo de votación:
      <select
        class="input"
        v-model="form.tipoDeVotacionSeleccionado"
        @change="changeDependientes($event)"
      >
        <option v-for="tipo in crearVotacion.tipos" :key="tipo" :value="tipo">
          {{ tipo.nombre }}
        </option>
      </select>
    </h2> -->
    <!-- <h2 v-if="form.tipoDeVotacionSeleccionado.nombre == 'Genérica'" class="titleh2">
      Rol de los Votantes:
      <select class="input" v-model="form.opcionTipoDeVotacionSeleccionado">
        <option
          v-for="opcion in form.tipoSeleccionado.opciones"
          :key="opcion"
          :value="opcion"
        >
          {{ opcion }}
        </option>
      </select>
    </h2>
    <h2 v-if="form.tipoSeleccionado.nombre == 'Dependiente'" class="titleh2">
      Votación Previa:
      <select class="input" v-model="form.opcionTipoSeleccionado">
        <option
          v-for="opcion in crearVotacion.dependientes"
          :key="opcion"
          :value="opcion"
        >
          {{ opcion.nombre.nombre }}
        </option>
      </select>
    </h2> -->
    <p class="error" id="error"></p>
    <br />
    <button class="button enable buttonWidth40" @click="validarDatos(form)">
      Crear
    </button>
    <button class="button disable buttonWidth40" @click="returnHome()">
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
