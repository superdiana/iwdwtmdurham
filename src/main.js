import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style.css'
import { store } from './store/store';
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCkBRCrLT4Zwiz5n3jrBx10_GWz3kh-jXo",
  authDomain: "iwd-jalandhar.firebaseapp.com",
  databaseURL: "https://iwd-jalandhar.firebaseio.com",
  projectId: "iwd-jalandhar",
  storageBucket: "iwd-jalandhar.appspot.com",
  messagingSenderId: "218751608595"
};
firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
