<template>
  <div class="container">
    <div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-10 mb-32">

      <div class="mt-8">
        <img src="@/assets/images/talent-acquisition-logo.svg"/>
        <p class="text-gray-500 mt-4 mr-4 text-sm">
          We focus on attracting your talent, so you can focus on inspiring them.
        </p>
        <p class="text-gray-400 mt-8 mr-4 text-xs">
          TalentAcquisition.ie © 2020
        </p>
        <p class="text-gray-400 mt-2 mr-4 text-xs">
          Site by <a href="https://ciaran.design" target="_blank">Ciaran.Design</a>
        </p>
      </div>

      <div class="mt-8">
        <h6 class="md:ml-2 mb-4 pb-2 border-b-2 border-gray-100">Sitemap</h6>
        <ul>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#why-us" rel="noopener">Why us</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#how-it-works" rel="noopener">How it works</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="#our-services" rel="noopener">Services</a></li>
        </ul>
      </div>

      <div class="mt-8">
        <h6 class="md:ml-2 mb-4 pb-2 border-b-2 border-gray-100">Company</h6>
        <ul>
          <li>
            <a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="mailto:Gavin.fox@martinsenmayer.com" target="_blank" rel="noopener">
            Contact us
            </a>
          </li>
          <li>

            <router-link
              class="text-sm rounded py-1 px-2 hover:bg-gray-100 block"
              to="/terms-privacy#pp"
            >
              Terms & Privacy
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li>
            <a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="javascript:window.Metomic('ConsentManager:show')">Manage cookies</a>
          </li>
        </ul>
      </div>
<!--
      <div>
        <h6 class="ml-2 mb-4 pb-2 border-b-2 border-gray-100">Follow</h6>
        <ul>
        </ul>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
