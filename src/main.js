// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyBzQB3kRG5f40xmZd7gzsmPHDu9fAn8Reo",
  authDomain: "recepter-bf518.firebaseapp.com",
  databaseURL: "https://recepter-bf518.firebaseio.com",
  projectId: "recepter-bf518",
  storageBucket: "recepter-bf518.appspot.com",
  messagingSenderId: "13342074781"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
