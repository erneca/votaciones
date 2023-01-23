import { defineStore } from "pinia";

export const consultaCrearVotacionesStore = defineStore(
  "consultasCrearVotaciones",
  {
    state: () => {
      return {
        nombres: [],
        tipos: [],
        programas: [],
        facultades: [],
        dependientes: [],
        estados: [],
      };
    },
    persist: true,
  }
);
