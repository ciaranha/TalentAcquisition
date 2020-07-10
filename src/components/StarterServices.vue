<template>
  <div id="our-services" class="bg-gray-100">

    <div class="pt-24 pb-20 container-wide mx-auto">
      <h6>
        —  Starter Package
      </h6>

      <h2 class="mt-2 max-w-screen-sm">
        Everything you need for a fixed fee.
      </h2>

      <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <ServiceCard
          title="Employee branding"
          body="Understanding who you are allows us to convey your employee value proposition."
          :image="require('@/assets/images/icons/employee-branding.svg')"
        />

        <ServiceCard
          title="Recruitment strategy"
          body="We’ll perfect or create an effective recruitment strategy for your company."
          :image="require('@/assets/images/icons/recruitment-analytics.svg')"
        />

        <ServiceCard
          title="Inbound sourcing"
          body="We'll respond to and interview all your inbound potential candidates."
          :image="require('@/assets/images/icons/inbound-sourcing.svg')"
        />

        <ServiceCard
          title="Job description writing"
          body="We’ll write job descriptions that ensure your voice and values are communicated."
          :image="require('@/assets/images/icons/job-description.svg')"
        />

        <ServiceCard
          title="Primary Interview"
          body="We'll conduct the first interview and share recordings."
          :image="require('@/assets/images/icons/primary-interview.svg')"
        />

        <ServiceCard
          title="Interview scheduling"
          body="We'll organise &amp; schedule all interviews through effective diary management."
          :image="require('@/assets/images/icons/interview-scheduling.svg')"
        />

        <ServiceCard
          title="Recruitment analytics"
          body="Get clear insights into the effectiveness of your recruitment strategy."
          :image="require('@/assets/images/icons/recruitment-analytics.svg')"
        />

        <ServiceCard
          title="Employee onboarding"
          body="We'll take care of offer management (Offer, Referencing and on-boarding)."
          :image="require('@/assets/images/icons/employee-onboarding.svg')"
        />

        <ServiceCard
          title="Vendor management"
          body="We can mange or select vendors ensuring a seamless recruitment process is maintained."
          :image="require('@/assets/images/icons/vendor-management.svg')"
        />

      </div>
    </div>

    <div class="container sm:text-left md:text-center pb-32">
      <h3>
        Get Started from €1,499
      </h3>
      <h4 class="mt-2 text-gray-600">
        Access all of these services for a fixed monthly price.
      </h4>

      <div class="flex md:justify-center">
        <AppButton
          class="mt-10 primary"
          link="https://talentacquisitionie.typeform.com/to/dKDMZE5W"
          msg="Get Started"
          target="_blank"
        />
        <AppButton
          class="mt-10 secondary ml-2"
          link="mailto:info@talentacquisition.ie"
          msg="Email us"
        />
      </div>
    </div>

  </div>
</template>

<script>
import AppButton from './ui/AppButton.vue'
import ServiceCard from './ui/ServiceCard.vue'


export default {
  name: 'StarterServices',
  components: {
    AppButton,
    ServiceCard
  },
}
</script>

<style scoped>
.service-card  {
  @apply bg-white;
}

.rounded-full {
  @apply bg-gray-100;
}
</style>
