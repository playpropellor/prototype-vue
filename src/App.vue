<template>
  <nav>
    <router-link to="/" tag="h1" class="text-blue-400">Propellor</router-link>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>