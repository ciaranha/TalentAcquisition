<template>
  <div class="container">
    <div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-20 mb-32">

      <div>
        <img src="@/assets/images/talent-acquisition-logo.svg"/>
        <p class="text-gray-500 mt-4 mr-4 text-sm">
          We focus on attracting your talent, so you can focus on inspiring them.
        </p>
      </div>

      <div>
        <h6 class="ml-2 mb-4 pb-2 border-b-2 border-gray-100">Sitemap</h6>
        <ul>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="" target="_blank" rel="noopener">Why us</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="" target="_blank" rel="noopener">How it works</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="" target="_blank" rel="noopener">Services</a></li>
        </ul>
      </div>

      <div>
        <h6 class="ml-2 mb-4 pb-2 border-b-2 border-gray-100">Company</h6>
        <ul>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="/about" target="_blank" rel="noopener">About</a></li>
          <li><a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="" target="_blank" rel="noopener">Contact us</a></li>
          <li>
            <a class="text-sm rounded py-1 px-2 hover:bg-gray-100 block" href="" target="_blank" rel="noopener">
              Terms &amp; Privacy
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h6 class="ml-2 mb-4 pb-2 border-b-2 border-gray-100">Follow</h6>
        <ul>
        </ul>
      </div>

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
