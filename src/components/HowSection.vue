<template>
  <div id="how-it-works" class="bg-white">

    <div class="pt-10 pb-20 container">

      <div class="md:flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-20">
        <img class="retina" src="@/assets/images/vision-values.svg"/>

        <div class="md:ml-12 align-center flex flex-col justify-center">
          <h2 class="mt-8">
            A modern recruitment strategy.
          </h2>
          <p class="text-gray-600">
            We'll design and deliver a tailored recruitment strategy that delivers a personalised candidate experience - ensuring your Voice, Values, Purpose and People are at the core.
          </p>
        </div>
      </div>

      <div class="md:flex flex-row sm:flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse mt-20">
        <img class="retina" src="@/assets/images/candidate-expertise.jpg"/>

        <div class="md:mr-12 align-center flex flex-col justify-center">
          <h2 class="mt-8">
            Exceptional candidate expertise.
          </h2>
          <p class="text-gray-600">
            Our deep rooted industry knowledge and experience will allow for the best candidate experience throughout the process - ensuring your business has the best opportunity to get the best candidates at a cost that feels right.
          </p>
        </div>
      </div>

      <div class="md:flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-20">
        <img class="retina" src="@/assets/images/day-job.jpg"/>

        <div class="md:ml-12 align-center flex flex-col justify-center">
          <h2 class="mt-8">
            Allowing you to get on with your day job.
          </h2>
          <p class="text-gray-600">
            With us on your side, you can get on with making your business the best it can be, confident that your Talent Acquisition function is operating to it's full potential.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HowSection',
}
</script>

<style scoped>
.retina {
  max-width: 50%;
}
</style>
