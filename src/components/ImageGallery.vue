<template>
  <div class="mt-24 flex overflow-hidden w-full justify-center">
    <!-- <div class=""> -->
      <div class="flex items-baseline">
        <div class="image-container">
          <img src="@/assets/images/gallery-image--2.png"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image--1.png"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-0.png"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-1.png"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-2.png"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-3.png"/>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'ImageGallery',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-container {
  border-radius: 16px;
  overflow: hidden;
  width: 282px;
  margin-right: 16px;
}
@media screen and (max-width: 780px) {
  .image-container {
    width: 120px;
  }
}
</style>
