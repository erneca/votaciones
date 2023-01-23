import { defineStore } from "pinia";

export const inhabilidadesStore = defineStore("inhabilidades", {
  state: () => {
    return {
      inhabilidades: [
        "Inabilidad #1",
        "Inabilidad #2",
        "Inabilidad #3",
        "Inabilidad #4",
        "Inabilidad #5",
        "Inabilidad #6",
      ],
    };
  },
  persist: true,
});
