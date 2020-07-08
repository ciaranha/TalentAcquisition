<template>
  <div class="bg-gray-100">

    <div class="pt-20 pb-20 container">
      <ServiceCard
        name="Employee Branding"
        img="@/assets/images/candidate-expertise.png"
      />
      <ServiceCard
        name="Number2"
        img="/img/another.svg"
      />
    </div>

    <AppButton class="mt-12 primary" msg="Get Started"/>

  </div>
</template>

<script>
import AppButton from './ui/AppButton.vue'
import ServiceCard from './ui/ServiceCard.vue'

export default {
  name: 'StarterServices',
  components: {
    ServiceCard,
    AppButton
  },
}
</script>
