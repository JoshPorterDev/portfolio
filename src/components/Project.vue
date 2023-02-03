<template>
  <div class="pb-6">
    <div class="flex gap-6 justify-center">
      <div
        class="projects rounded-2xl duration-300 pb-6 transition-colors shadow-black p-6 shadow-2xl">
        <h1 class="text-white font-bold text-4xl text-center pb-2">{{ project.name }}</h1>
        <img class="rounded-lg shadow-md" :src="'/img/projects/' + project.image" alt="">
        <div class="tags flex flex-row gap-4 justify-center flex-wrap p-4">
          <h1 class="text-white text-md rounded-lg p-2" v-for="tag in project.tags">{{ tag }}</h1>
        </div>
        <div class="links flex flex-row justify-center gap-4">
          <a :href="project.source_link"
            class="bg-zinc-900 text-white p-2 rounded-lg transition-colors duration-300 hover:shadow-2xl hover:text-blue-400"
            target="_blank">Source</a>
          <a :href="project.demo_link"
            class="bg-zinc-900 text-white p-2 rounded-lg transition-colors duration-300 hover:shadow-2xl hover:text-blue-400"
            target="_blank">Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { project } = defineProps({
    project: {
      required: true,
      type: Object
    }
  })
</script>
