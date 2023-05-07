<template>
  <section class="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
    <div class="py-2 border-b border-white">
      <h2>My Teams ({{ teamCount }})</h2>
    </div>
    <div class="my-2" v-if="!store.hasJoinedTeam">
      <div class="p-2 bg-transparentWhite-800">
        <p class="mb-2">
          Propellor Prop Squad has invited you to join their team
        </p>
        <button class="w-full py-2 text-white bg-blue-400" @click="store.joinTeam">
          Join Team
        </button>
      </div>
    </div>
    <div v-else>
      <div class="p-2 mb-2">
        <h3 class="my-2">{{ teams[0].name }}</h3>
        <ul>
          <li v-for="member in teams[0].members" :key="member.id">
            {{ member.name }}
          </li>
        </ul>
      </div>
      <div class="flex justify-end pb-2 border-b border-transparentWhite-500">
        <button class="uppercase">
          Create Ticket <span class="text-blue-400">+</span>
        </button>
      </div>
      <Slips :team-slips="teams[0].tickets" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTeamStore } from '../stores/teams';

import data from '../constants/data.json'

import Slips from './Slips.vue';

const store = useTeamStore()
const teams = ref(data.teams)

const teamCount = computed(() => {
  return store.hasJoinedTeam ? teams.value.length : 0
})
</script>
