<template>
  <section class="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
    <div class="py-2 border-b border-white">
      <h2>Order Slip</h2>
    </div>
    <div class="my-2">
      <PickItem :pick="pick" :team-members="teamMembers" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PickItem from './PickItem.vue';

defineProps({
  pick: {
    type: Object,
    require: true,
    default: null
  },
  teamMembers: {
    type: Array,
    required: true,
  },
})
</script>
