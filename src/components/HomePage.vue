<template>
  <div class="">
    <SiteHero msg="We focus on attracting your talent, so you can focus on inspiring them."/>
    <ImageGallery />
    <WhySection />
    <HowSection />
    <StarterServices />
    <ScaleServices />
    <ImageBanner />
  </div>
</template>

<script>
import SiteHero from './SiteHero.vue'
import ImageGallery from './ImageGallery.vue'
import WhySection from './WhySection.vue'
import HowSection from './HowSection.vue'
import StarterServices from './StarterServices.vue'
import ScaleServices from './ScaleServices.vue'
import ImageBanner from './ImageBanner.vue'

export default {
  name: 'HomePage',
  components: {
    SiteHero,
    ImageGallery,
    WhySection,
    HowSection,
    StarterServices,
    ScaleServices,
    ImageBanner
  },
  props: {
    msg: String
  }
}
</script>
