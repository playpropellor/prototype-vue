<template>
  <section class="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
    <div class="p-2 border-b border-white">
      <h2>Sports</h2>
    </div>
    <p class="p-2 text-blue-400 border-b border-blue-400">Home</p>
    <ul>
      <li
        v-for="(item, i) in sportsData"
        :key="i"
        class="border-b border-transparent cursor-pointer hover:border-blue-400"
      >
        <p class="p-2 hover:text-blue-400" :key="i">{{ item }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../constants/data.json'

const sportsData = ref(data.sports)
</script>
