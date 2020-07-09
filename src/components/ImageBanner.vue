<template>
  <div class="backgroundImage relative" :style="{ backgroundImage: `url( ${Image} )` }">
    <h2 class="text-center relative z-10 py-12 lg:py-32 bg-regal-blue bg-opacity-75 px-8">
      We focus on the fit to your business in every way.
    </h2>
  </div>
</template>

<script>
import Image from "@/assets/images/banner-image.png"

export default {
  name: 'ImageBanner',
  data : () => ({
    Image
  })
}
</script>

<style scoped>
.backgroundImage {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
