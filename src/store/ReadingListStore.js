import { defineStore } from "pinia";

import readinglist from "../data/reading-list.json";

export const useReadingListStore = defineStore("ReadingListStore", {
  // State 
  state: () => {
    return {
      readinglist,
    }
  }
  // Actions
  // Getters
})
