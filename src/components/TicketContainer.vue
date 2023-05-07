<template>
  <section class="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
    <div class="py-2 border-b border-white">
      <h2>Picks</h2>
    </div>
    <ul class="my-2">
      <li v-for="pick in ticket.picks" :key="pick.id" class="py-2 my-2 border-b border-transparentWhite-800">
        <div class="flex justify-between">
          <span class="text-sm text-blue-400">{{ getTeamMember(pick.userId).name }}</span>
        </div>
        <div class="flex items-end border-b border-transparentWhite-500">
          <div class="px-2">
            <img :src="setImage(pick.imageName)" alt="">
          </div>
          <div>
            <p class="text-lg">{{ pick.name }}</p>
            <p class="text-xs uppercase text-transparentWhite-500">{{ pick.game }}</p>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="py-2 text-xs text-transparentWhite-500">{{ pick.propNumber }} {{ pick.propType }}</p>
          <!-- <div class="flex h-4 border border-white divide-x">
            <span class="flex items-center justify-center w-8">&#xfe3f;</span>
            <span class="flex items-center justify-center w-8">&#xfe40;</span>
          </div> -->
          <p class="text-xs">{{ pick.over ? 'over' : 'under' }}</p>
        </div>

      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import data from '../constants/data.json'

const route = useRoute()

const teamMembers = data.teams[0].members
const ticket = data.teams[0].tickets.find(t => t.id === route.params.ticketId)

const getTeamMember = (pickUserId) => {
  return teamMembers.find(m => m.id === pickUserId)
}

const setImage = (imageName) => {
  const imgUrl = new URL(`../assets/${imageName}`, import.meta.url).href;

  return imgUrl
}
</script>