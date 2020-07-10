import Vue from 'vue'
import App from './App.vue'
import VueDrift from 'vue-drift'
import './assets/styles/index.css';

Vue.use(VueDrift, {
  appId: 'gxkmcap389g5',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
