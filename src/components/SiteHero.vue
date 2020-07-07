<template>
  <div class="container mx-auto">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SiteHero',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
