<template>
  <section class="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
    <component
      :is="!addingPick ? ViewTicketPicks : MakeTicketPick"
      v-bind="{
        ticket: ticket,
        teamMembers: teamMembers,
        addingPick: addingPick,
        pick: pick,
      }"
      @update:pick="updatePick"
      @update:adding-pick="addingPick = !addingPick"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import ViewTicketPicks from './ViewTicketPicks.vue'
import MakeTicketPick from './MakeTicketPick.vue'

import data from '../constants/data.json'

const route = useRoute()

const pick = ref(null)
const addingPick = ref(false)

const teamMembers = data.teams[0].members
const ticket = data.teams[0].tickets.find((t) => t.id === route.params.ticketId)

const updatePick = (payload) => {
  pick.value = payload
}
</script>
