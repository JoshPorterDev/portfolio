import { defineStore } from "pinia";

import projects from "../data/projects.json";

export const useProjectStore = defineStore("ProjectStore", {
  state: () => {
    return {
      projects,
    }
  }
})
