import { createStore } from 'vuex'
import auth from "./auth"
import info from './info';


export default createStore({
  state: {
    error: null,
  },
  getters: {
    error: state => state.error,
  },
  mutations: {
    setError(state, error){
      state.error = error;
    },
    clearError(state){
      state.error = null;
    }
  },
  modules: {
    auth, info
  }
})
