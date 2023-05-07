<template>
  <div class="p-2">
    <Slip v-for="slip in teamSlips" :slip="slip" :key="slip.id" @click="viewTicketDetails(slip)" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Slip from './Slip.vue';

const props = defineProps({
  teamSlips: {
    type: Array,
    required: true,
    default: []
  }
})

const router = useRouter()

const viewTicketDetails = (slip) => {
  router.push({
    path: `/ticket/${slip.id}`
  })
}
</script>
