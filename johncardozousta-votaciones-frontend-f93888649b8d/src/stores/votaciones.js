import { defineStore } from "pinia";

export const votacionesStore = defineStore("votaciones", {
  state: () => {
    return {
      votaciones: [],
      votacion: {},
      votacionesAll: [],
      logs: [],
    };
  },
  persist: true,
});
