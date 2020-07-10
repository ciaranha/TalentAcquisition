<template>
  <nav class="flex items-center justify-between flex-wrap p-4">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <a href="/">
        <img src="@/assets/images/talent-acquisition-logo.svg"/>
      </a>
    </div>

    <div class="block lg:hidden">
      <button v-on:click="toggleNavbar()" class="flex items-center px-3 py-3 rounded text-black hover:text-black">
        <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <g fill="none" fill-rule="evenodd">
            <g stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M1 1h18M19 7H5M9 13h10"/>
            </g>
            <path d="M-2-5h24v24H-2z"/>
          </g>
        </svg>
      </button>
    </div>
    <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="justify-end w-full block flex-end lg:flex lg:items-center lg:w-auto">
      <div class="">
        <a href="#why-us" class="text-right text-sm block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2">
          Why us
        </a>
        <a href="#how-it-works" class="text-right text-sm block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2">
          How it works
        </a>
        <a href="#our-services" class="text-right text-sm block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black hover:bg-gray-100 rounded px-3 py-2">
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
