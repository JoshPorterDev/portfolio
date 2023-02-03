<template>
  <div>
    <div class="pb-8 mx-auto text-center">
      <div class="reading">
        <h1 class="text-blue-400 font-bold text-4xl">Reading</h1>
        <div v-for="book in readingListStore.readinglist.reading" :key="book.title" class="p-1 text-white">
          <h1 class="text-bold text-sm">{{ book.title }}</h1>
        </div>
      </div>
      <div class="read">
        <h1 class="text-blue-400 font-bold text-4xl">Read</h1>
        <div v-for="book in readingListStore.readinglist.read" :key="book.title" class="p-1 text-white">
          <h1 class="text-bold text-sm">{{ book.title }}</h1>
        </div>
      </div>
      <div class="ots">
        <h1 class="text-blue-400 font-bold text-4xl">On the Shelf</h1>
        <div v-for="book in readingListStore.readinglist.ots" :key="book.title" class="p-1 text-white">
          <h1 class="text-bold text-sm">{{ book.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useReadingListStore} from "../store/ReadingListStore"
  const readingListStore = useReadingListStore();
  console.log(readingListStore);
</script>
