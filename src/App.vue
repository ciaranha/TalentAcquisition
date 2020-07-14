<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <SiteFooter />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    Nav,
    SiteFooter
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/',
      })
    }
  }
}
</script>
