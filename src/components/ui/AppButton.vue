<template>
  <button>
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
