<template>
  <a class="btn inline-block" :href="link">
    {{ msg }}
  </a>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    msg: String,
    link: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
