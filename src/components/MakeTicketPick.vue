<template>
  <ul>
    <li
      v-for="(player, i) in playerProps"
      :key="i"
      class="py-2"
    >
      <div class="flex items-end border-b border-transparentWhite-500">
        <img
          class="w-20 aspect-video"
          :src="setImage(player.imageName)"
          alt=""
        >

        <div>
          <p class="text-lg">
            {{ player.name }}
          </p>
          <p class="text-xs uppercase text-transparentWhite-500">
            {{ player.game }}
          </p>
        </div>
      </div>
      <div
        v-for="prop in player.props"
        :key="prop.id"
        class="flex justify-between p-2 border-b border-transparentWhite-800"
      >
        <div class="text-xs text-white">
          <span>{{ prop.propNumber }}</span> <span>{{ prop.propName }}</span>
        </div>
        <div class="flex border border-white divide-x">
          <span class="flex items-center justify-center w-12 text-xs uppercase cursor-pointer hover:bg-blue-400">Over</span>
          <span class="flex items-center justify-center w-12 text-xs uppercase cursor-pointer hover:bg-blue-400">Under</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import data from '../constants/data.json'

const playerProps = data.playerProps

const setImage = (imageName) => {
  const imgUrl = new URL(`../assets/${imageName}`, import.meta.url).href

  return imgUrl
}
</script>
