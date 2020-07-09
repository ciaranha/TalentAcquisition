<template>
  <div class="image-container" :src="image"
  >
    <img class="image" src="@/assets/images/banner-image.png"/>
    <h2 class="text-center py-12">
      We focus on the fit to your business in every way.
    </h2>
  </div>
</template>

<script>

export default {
  name: 'ImageBanner',
  data() {
    return {
      image: { backgroundImage: "url('/images/banner-image.png')" }
    };
  }
}
</script>

<style scoped>
.image-container {
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container:after {
  content: '';
  background: rgba(198,215,228,0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.image {
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: -1;
}
</style>
