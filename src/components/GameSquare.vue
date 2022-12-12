<template>
  <div :style="`background-color: white`">
    {{props.square.terrain}}
  </div>
</template>

<script setup lang="ts">
import { getGameStore } from '@/store/game-store';
import { Terrain, type Square } from '@/types';

const gameStore = getGameStore();
const props = defineProps<{
  square: Square
}>()
const sq: Square = {terrain: Terrain.path}

</script>

<style scoped>

</style>
