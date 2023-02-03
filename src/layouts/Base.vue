<template>
  <Navbar />
  <main>
    <div class="w-8/12 sm:w-1/2 mx-auto">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue" 
</script>
