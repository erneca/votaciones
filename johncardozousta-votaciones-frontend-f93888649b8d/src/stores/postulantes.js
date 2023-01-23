import { defineStore } from "pinia";

export const postulantesStore = defineStore("postulantes", {
  state: () => {
    return {
      postulantes: [],
      resultados: [],
      semestres: [],
    };
  },
  persist: true,
});
