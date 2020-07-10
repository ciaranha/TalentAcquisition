import Vue from 'vue'
import App from './App.vue'
import VueDrift from 'vue-drift'
import VueGtag from "vue-gtag";

import './assets/styles/index.css';

Vue.use(VueGtag, {
  config: { id: 'UA-172318941-1' }
});

Vue.use(VueDrift, {
  appId: 'gxkmcap389g5',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
