import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import TermsPrivacy from './../components/TermsPrivacy.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', component: HomePage },
      { path: '/terms-privacy', component: TermsPrivacy }
    ]
})
