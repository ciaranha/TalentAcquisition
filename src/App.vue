<template>
  <div id="app">
    <Nav class="mb-12" />
    <SiteHero msg="We focus on attracting your talent, so you can focus on inspiring them."/>
    <ImageGallery />
    <WhySection />
    <HowSection />
    <StarterServices />
    <ScaleServices />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import SiteHero from './components/SiteHero.vue'
import ImageGallery from './components/ImageGallery.vue'
import WhySection from './components/WhySection.vue'
import HowSection from './components/HowSection.vue'
import StarterServices from './components/StarterServices.vue'
import ScaleServices from './components/ScaleServices.vue'

export default {
  name: 'App',
  components: {
    Nav,
    SiteHero,
    ImageGallery,
    WhySection,
    HowSection,
    StarterServices,
    ScaleServices
  }
}
</script>
