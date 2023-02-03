<template>
  <div class="moon pb-6">
    <img :src="'/img/astrophotography/' + photo.image" class="border-blue-400 shadow-black shadow-lg rounded-3xl" alt="">
    <p class="text-white text-center pt-4 font-bold text-lg">{{ photo.target }}<span class="text-xs font-normal italic">-
        {{ photo.date }}</span></p>
  </div>
</template>

<script setup>
  const {photo} = defineProps({
    photo: {
      required: true,
      type: Object
    }
  })
</script>
