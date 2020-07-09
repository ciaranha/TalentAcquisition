<template>
  <nav class="flex items-center justify-between flex-wrap p-4">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <img src="@/assets/images/talent-acquisition-logo.svg"/>
    </div>
    <div class="block lg:hidden">
      <button v-on:click="toggleNavbar()" class="flex items-center px-3 py-2 border rounded text-black hover:text-black">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-full block flex-end lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-end">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2">
          Why us
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2 mr-2">
          How it works
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2 mr-2">
          Our Services
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
</script>
