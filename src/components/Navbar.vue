<template>
  <div>
    <div class="flex justify-center p-4">
      <router-link class="text-blue-400 font-bold text-6xl" :to="{ name: 'home' }">Josh Porter</router-link>
    </div>
    <div class="flex flex-wrap gap-12 p-4 items-center text-2xl font-sans justify-center text-white">
      <router-link :to="{ name: 'projects' }"
        class="inline-flex items-center hover:text-blue-400 transition-colors">Projects</router-link>
      <router-link :to="{ name: 'reading-list' }"
        class="inline-flex items-center hover:text-blue-400 transition-colors">Reading List</router-link>
      <router-link :to="{ name: 'astrophotography' }"
        class="inline-flex items-center hover:text-blue-400 transition-colors">Astrophotography</router-link>
    </div>
    <hr class="text-white w-11/12 sm:w-10/12 mb-4 mx-auto">
  </div>
</template>
