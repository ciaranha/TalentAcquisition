<template>
  <div id="why-us" class="bg-gray-100 -my-20">
    <div class="pt-48 pb-20 container">

      <div class="relative inline-block">
        <h6>
          — Why Outsource your talent acquisition?
        </h6>

        <h2 class="mt-4 max-w-screen-sm">
          We’ll take the strain out of growing your team, at an affordable cost.
        </h2>

        <div class="absolute top-0 right-0 lg:mt-10 md:mt-20 lg:-mr-16">
          <img src="@/assets/images/penmarks/squiggle0.svg"/>
        </div>
      </div>

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            01
          </span>
          <p>
            Your business is growing and demand for your time is at an all time high.
          </p>
        </div>

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            02
          </span>
          <p>
            Recruitment is not your job and you are already feeling the strain from work overload.
          </p>
        </div>

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            03
          </span>
          <p>
            You are looking to improve the talent acquisition reputation of your business.
          </p>
        </div>

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            04
          </span>
          <p>
            You need an experienced talent expert to support your team.
          </p>
        </div>

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            05
          </span>
          <p>
            Cost pressures on your agency dependency.
          </p>
        </div>

        <div class="rounded p-6 flex bg-white">
          <span class="text-gray-500 mr-4">
            06
          </span>
          <p>
            You have a fluctuating recruitment demand.
          </p>
        </div>

      </div>

    </div>

    <div class="text-center pb-48">
      <h3>
        If any of these scenarios sound familiar, we can help.
      </h3>
      <h4 class="text-gray-600">
        Get access to Talent Acquisition for a fixed monthly fee.
      </h4>

      <AppButton class="mt-8 primary" msg="See Pricing"/>
    </div>

  </div>
</template>

<script>
import AppButton from './ui/AppButton.vue'
export default {
  name: 'WhySection',
  components: {
    AppButton
  }
}
</script>
