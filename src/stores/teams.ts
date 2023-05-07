import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const hasJoinedTeam = ref(false)

  function joinTeam() {
    hasJoinedTeam.value = true
  }

  return { hasJoinedTeam, joinTeam }
})