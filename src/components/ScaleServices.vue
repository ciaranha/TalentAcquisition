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
          title="CRM advice"
          body="We can advice you on the most suitable CRM for your needs."
          :image="require('@/assets/images/icons/crm-advice.svg')"
        />

        <ServiceCard
          title="LinkedIn management"
          body="We'll ensure you're company LinkedIn looks attractive to candidates."
          :image="require('@/assets/images/icons/linkedin.svg')"
        />

        <ServiceCard
          title="Social media consulting"
          body="Make sure you're presenting the right image on social media."
          :image="require('@/assets/images/icons/social-media.svg')"
        />

        <ServiceCard
          title="Technical Testing"
          body="We use best in class code assessments to ensure your time isn't wasted."
          :image="require('@/assets/images/icons/technical-testing.svg')"
        />

        <ServiceCard
          title="Outbound Sourcing"
          body="We can go to market on your behalf, head hunting the talent needed if direct channels are not sufficient. "
          :image="require('@/assets/images/icons/outbound-sourcing.svg')"
        />

        <ServiceCard
          title="Interview Training"
          body="We'll train your existing staff in how to better interview and improve the experience for all."
          :image="require('@/assets/images/icons/interview-training.svg')"
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
</style>
