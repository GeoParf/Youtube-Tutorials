import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import messagePlugin from './utils/message.plugin'
import Loader from "@/components/app/Loader";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {apiKey: "AIzaSyB70sojmD99k3BWNv2OnlCtvAplPDUqG2s",
authDomain: "vue-crm-ytube-tutorial.firebaseapp.com",
projectId: "vue-crm-ytube-tutorial",
storageBucket: "vue-crm-ytube-tutorial.appspot.com",
messagingSenderId: "1082827266009",
appId: "1:1082827266009:web:4bdc2d3414ad08d75cabc8",
measurementId: "G-C09YJHDZ6P",
databaseURL: 'https://vue-crm-ytube-tutorial-default-rtdb.europe-west1.firebasedatabase.app/'
}



firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.use(messagePlugin);
    app.component(Loader);
    app.config.compilerOptions.isCustomElement = tag => tag(Loader)
    app.mount('#app');
  };
})

