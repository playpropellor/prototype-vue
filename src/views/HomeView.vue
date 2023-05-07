<template>
  <main class="flex gap-2">
    <Sidebar />
    <Teams />
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import Sidebar from '../components/Sidebar.vue';
import Teams from '../components/Teams.vue';
import TicketContainer from '../components/TicketContainer.vue';

const route = useRoute()
</script>