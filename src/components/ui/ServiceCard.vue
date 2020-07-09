<template>
  <div class="service-card rounded-md p-5">
    <div class="flex items-center">
      <div class="bg-gray-100 rounded-full p-2">
        <img :src="image" />
      </div>
      <p class="ml-3">
        <strong>
          {{ title }}
        </strong>
      </p>
    </div>
    <p class="text-gray-700 mt-2">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    image: {
      type: String,
    }
  }
}
</script>
