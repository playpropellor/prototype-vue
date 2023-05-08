<template>
  <div class="p-2 cursor-pointer border-sm hover:bg-transparentWhite-900">
    <h3 class="text-lg">{{ slip.name }}</h3>
    <p class="text-sm text-transparentWhite-500">
      Team wager <span class="text-green-500">{{ slip.wager }}</span>
    </p>
    <p class="text-sm text-transparentWhite-500">
      Team payout <span class="text-green-500">{{ slip.payout }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
type TicketPick = {
  id: Number
  userId: Number
  propType: String
  game: String
  propNumber: Number
  over: Boolean
  amount: String
  image: String
}

interface Ticket {
  id: String
  name: String
  wager: String
  payout: String
  picks: TicketPick[]
}

interface Props {
  slip: Ticket
}

const props = defineProps<Props>()
</script>
