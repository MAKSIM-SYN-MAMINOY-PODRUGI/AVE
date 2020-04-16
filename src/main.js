import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueMeta)

Vue.component('Paginate', Paginate)


firebase.initializeApp({
  apiKey: "AIzaSyD_SB8l90_XIElj_l385gEhmjXZCGN0XfM",
  authDomain: "vue-pro-4ac9d.firebaseapp.com",
  databaseURL: "https://vue-pro-4ac9d.firebaseio.com",
  projectId: "vue-pro-4ac9d",
  storageBucket: "vue-pro-4ac9d.appspot.com",
  messagingSenderId: "1033922219643",
  appId: "1:1033922219643:web:76b4173e6918803b161cde",
  measurementId: "G-400NNFH1M2"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }    
})
