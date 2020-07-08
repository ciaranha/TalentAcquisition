<template>
  <div class="camera">
    <h2 class="camera__name">{{ name }}</h2>
    <img :src="img" />
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    name: {
      type: String,
    },
    img: {
      type: String,
    }
  }
}
</script>
