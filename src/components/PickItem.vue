<template>
  <div
    class="py-2 my-2 border-b border-transparentWhite-800"
  >
    <div class="flex" :class="pick.userId ? 'justify-between' : 'flex-end'">
      <span v-if="pick.userId" class="text-sm text-blue-400">{{
        getTeamMember(pick.userId).name
      }}</span>
      <span v-if="pick.amount" class="text-sm">{{ pick.amount }}</span>
    </div>
    <div class="flex items-end border-b border-transparentWhite-500">
      <img
        class="w-20 aspect-video"
        :src="setImage(pick.imageName)"
        alt=""
      >

      <div>
        <p class="text-lg">
          {{ pick.name }}
        </p>
        <p class="text-xs uppercase text-transparentWhite-500">
          {{ pick.game }}
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <p class="py-2 text-xs text-transparentWhite-500">
        {{ pick.propNumber }} {{ pick.propType }}
      </p>
      <div class="flex border border-white divide-x">
        <span
          class="flex items-center justify-center w-12 text-xs uppercase"
          :class="{
            'bg-transparentWhite-500': pick.over,
          }"
        >Over</span>
        <span
          class="flex items-center justify-center w-12 text-xs uppercase"
          :class="{ 'bg-transparentWhite-500': !pick.over }"
        >Under</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  pick: {
    type: Object,
    required: true,
    default: null
  },
  teamMembers: {
    type: Array,
    required: true,
  },
})

const getTeamMember = (pickUserId) => {
  return props.teamMembers.find((m) => m.id === pickUserId)
}

const setImage = (imageName) => {
  const imgUrl = new URL(`../assets/${imageName}`, import.meta.url).href

  return imgUrl
}
</script>
