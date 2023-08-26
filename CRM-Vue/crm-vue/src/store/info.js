import { getDatabase, ref, get, child} from "firebase/database"

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info){
      state.info = info;
    },
    clearInfo(state){
      state.info = {};
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try{
        const dbRef = ref(getDatabase());
        const uid = await dispatch('getUid');
        await get(child(dbRef, `users/${uid}/info`)).then((snapshot) => {
            const info = snapshot.val(); // Пример функции взять отсюда https://firebase.google.com/docs/database/web/read-and-write#web-modular-api_1
            commit(`setInfo`, info);
        });
      } 
      catch(e){

      }   
    }
  },
  getters: {
    info: s => s.info,
  }
}