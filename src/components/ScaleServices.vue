<template>
  <div class="bg-white">

    <div class="pt-20 pb-20 container-wide mx-auto">
      <h6>
        —  Starter Package
      </h6>
      <h2>
        Everything you need for a fixed fee.
      </h2>

      <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">

        <ServiceCard
          title="Vendor management"
          body="We can mange or select vendors ensuring a seamless recruitment process is maintained."
          :image="require('@/assets/images/icons/vendor-management.svg')"
        />

      </div>
    </div>

    <div class="text-center pb-20">
      <h3>
        Chat with us today
      </h3>
      <h4 class="text-gray-500">
        We can setup a call to discuss your talent acquisition needs.
      </h4>

      <AppButton class="mt-12 secondary" msg="See Pricing"/>
    </div>

  </div>
</template>

<script>
import AppButton from './ui/AppButton.vue'
import ServiceCard from './ui/ServiceCard.vue'

export default {
  name: 'ScaleServices',
  components: {
    AppButton,
    ServiceCard
  },
}
</script>

<style scoped>
.service-card  {
  @apply bg-gray-100;
}
.rounded-full {
  @apply bg-white;
}
</style>
