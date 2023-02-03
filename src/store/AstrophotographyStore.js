import { defineStore } from "pinia";

import photos from "../data/astrophotography.json";

export const useAstrophotographyStore = defineStore("AstrophotographyStore", {
  state: () => {
    return {
      photos,
    }
  }
})
