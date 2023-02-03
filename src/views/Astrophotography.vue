<template>
  <div class="lg:w-8/12 mx-auto">
    <div class="info flex flex-col">
      <h1 class="text-blue-400 font-bold text-3xl pb-2">Gear</h1>
      <a class="text-white text-2xl"
        href="https://www.highpointscientific.com/apertura-ad10-10inch-dobsonian-telescope-ad10">Apertura AD10</a>
      <h1 class="text-white text-2xl">Samsung Galaxy S22</h1>
      <a class="text-white text-2xl pb-4"
        href="https://www.highpointscientific.com/celestron-nexyz-dx-smartphone-adapter-kit-with-bluetooth-remote-81057">Celestron
        NexYZ DX
        Smartphone Adapter</a>
    </div>
    <Astrophoto v-for="photo of astrophotographyStore.photos" :key="photo.target" :photo="photo" />
  </div>
</template>

<script setup>
  import Astrophoto from "../components/Astrophoto.vue";
  import {useAstrophotographyStore} from "../store/AstrophotographyStore"
  const astrophotographyStore = useAstrophotographyStore();
</script>
