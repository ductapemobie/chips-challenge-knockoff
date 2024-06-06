<template>
  <div>
    <img 
      style="position: absolute"
      :style="imgCss"
      src="https://raw.githubusercontent.com/ductapemobie/various-assets/main/arrow.png"
      v-if="props.square.inhabitant"
    >
  </div>
</template>

<script setup lang="ts">
import { getGameStore } from '@/store/game-store';
import type { Direction, Square } from '@/types';
import { computed } from 'vue';

const gameStore = getGameStore();
const props = defineProps<{
  square: Square
}>()

const degMap: Record<Direction, string> = {
  'down': '180',
  'up': '0',
  'right': '90',
  'left': '270',
}

const imgCss = computed(() =>
  ({
    transform: `rotate(${degMap[gameStore.charPosition.direction]}deg)`
  })
)

</script>

<style scoped>

</style>
