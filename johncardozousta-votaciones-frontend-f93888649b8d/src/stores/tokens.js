import { defineStore } from "pinia";

export const tokenStore = defineStore("token", {
  state: () => {
    return {
      usuario: "",
      token: "",
    };
  },
  persist: true,
});
