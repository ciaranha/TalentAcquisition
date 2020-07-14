import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import router from './router'

import './assets/styles/index.css';

Vue.use(VueGtag, {
  config: { id: 'UA-172318941-1' }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
