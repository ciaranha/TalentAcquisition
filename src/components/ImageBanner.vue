<template>
  <div :style="image" class="bg-teal-500">
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
