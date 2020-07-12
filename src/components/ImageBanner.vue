<template>
  <div class="backgroundImage" :style="{ backgroundImage: `url( ${Image} )` }">
    <div class="text-center relative z-10 py-12 md:py-40 bg-regal-blue bg-opacity-90 px-16 w-full">
      <div class="relative inline-block">
        <div class="squiggle1">
          <img src="@/assets/images/penmarks/squiggle1.svg"/>
        </div>
        <div class="squiggle2">
          <img src="@/assets/images/penmarks/squiggle2.svg"/>
        </div>
        <h2 class="my-0">
          We focus on the fit to your business in every way.
        </h2>
        <div class="squiggle3">
          <img src="@/assets/images/penmarks/squiggle3.svg"/>
        </div>
        <div class="squiggle4">
          <img src="@/assets/images/penmarks/squiggle4.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "@/assets/images/banner-image.jpg"

export default {
  name: 'ImageBanner',
  data : () => ({
    Image
  })
}
</script>

<style scoped>
.squiggle1 {
  position: absolute;
  z-index: 100;
  left: -60px;
}
.squiggle2 {
  position: absolute;
  z-index: 100;
  left: 31%;
  top: -24px;
}
.squiggle3 {
  position: absolute;
  z-index: 100;
  left: 54%;
  top: 44px;
}
.squiggle4 {
  position: absolute;
  z-index: 100;
  right: -44px;
  bottom: 34px;
}
@media screen and (max-width: 980px) {
  .squiggle3 {
    display: none;
  }
  .squiggle1,
  .squiggle2,
  .squiggle4 {
    opacity: .3;
  }
}
.backgroundImage {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
