<template>
  <nav class="w-full">
    <router-link to="/" tag="h1" class="text-blue-400">Propellor</router-link>
  </nav>
  <RouterView class="flex-1" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>