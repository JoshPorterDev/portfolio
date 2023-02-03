<template>
  <div>
    <div class="project flex flex-col gap-4 items-center">
      <h1 class="text-blue-400 text-center font-bold text-5xl">Featured Project</h1>
      <Project :project="projectStore.projects[0]"/>
      <router-link class="text-white text-lg transition-colors bg-blue-400 p-2 rounded-lg hover:shadow-lg"
        :to="{ name: 'projects' }">View All</router-link>
    </div>
    <div class="contact flex flex-wrap flex-col pt-4 pb-6 items-center gap-4">
      <h1 class="text-blue-400 font-bold text-5xl">Contact</h1>
      <a class="text-white hover:text-blue-400 text-lg" href="#">contact@joshporter.xyz</a>
    </div>
  </div>
</template>

<script setup>
  import Project from "../components/Project.vue";
  import {useProjectStore} from "../store/ProjectStore"
  const projectStore = useProjectStore();
</script>
