<template>
  <div class="py-2 border-b border-white">
    <h2>Picks</h2>
  </div>
  <button
    v-if="!addingPick && !pick"
    class="w-full py-2 my-2 text-white bg-blue-400"
    @click="$emit('update:adding-pick')"
  >
    Add Your Pick
  </button>
  <ul class="my-2">
    <li
      v-for="pick in ticket.picks"
      :key="pick.id"
    >
      <PickItem
        :pick="pick"
        v-bind="$attrs"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import PickItem from './PickItem.vue'

const props = defineProps({
  ticket: {
    type: Object,
    required: true,
  },
  pick: {
    type: [Object, null],
    default: null,
    required: true,
  },
  addingPick: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:adding-pick'])
</script>
