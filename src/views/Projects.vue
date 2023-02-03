<template>
    <div class="flex flex-wrap pb-6 gap-6 justify-center">
      <Project v-for="project of projectStore.projects" :key="project.name" :project="project" />
    </div>
</template>

<script setup>
  import Project from "../components/Project.vue";
  import {useProjectStore} from "../store/ProjectStore"
  const projectStore = useProjectStore();
</script>
