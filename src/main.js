import Vue from 'vue'
import App from './App.vue'
import VueDrift from 'vue-drift'
import VueAnalytics from 'vue-analytics';

import './assets/styles/index.css';

Vue.use(VueDrift, {
  appId: 'gxkmcap389g5',
})

Vue.use(VueAnalytics, {
  id: 'UA-172318941-1'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
