import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  state() {
    return {
      region: '',
    }
  },
  modules: {
    auth
  },
  mutations: {
    prend_valeur(r) {
      this.region = r
    }
  }
});

export default store; 