<template>
  <nav class="flex items-center justify-between flex-wrap p-4">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#323232" stroke-width="2.2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15.1 22.3c0-3.2 2.6-5.8 5.8-5.8a5.8 5.8 0 01-5.8-5.9c0 3.3-2.6 5.9-5.8 5.9 3.2 0 5.8 2.6 5.8 5.8zM25.2 10.7c0-2.4 2-4.3 4.4-4.3-2.4 0-4.4-2-4.4-4.4 0 2.4-2 4.4-4.4 4.4a4.4 4.4 0 014.4 4.3h0z"/>
          <path d="M28.2 15v8.7c0 3.3-2.6 5.9-5.8 5.9H7.8A5.8 5.8 0 012 23.7V9.2C2 6 4.6 3.4 7.8 3.4h8.8"/>
        </g>
      </svg>
      <span class="font-semibold tracking-tight">TalentAcquisition.ie</span>
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
