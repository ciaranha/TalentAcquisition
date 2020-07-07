<template>
  <div id="app">
    <Nav class="mb-6" />
    <SiteHero msg="We focus on attracting your talent, so you can focus on inspiring them."/>
  </div>
</template>

<script>
import SiteHero from './components/SiteHero.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    SiteHero,
    Nav
  }
}
</script>
