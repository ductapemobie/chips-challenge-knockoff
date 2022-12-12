<template>
  <div class="top-header">
    <span>Chips challenge Knockoff</span>
    <button @click="initBoard">init board</button>
  </div>
</template>

<script setup lang="ts">
import { getGameStore } from '@/store/game-store'
const gameStore = getGameStore()

function initBoard(){
  gameStore.initLevel();
}
</script>

<style scoped>
.top-header {
  font-size: 36px;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-family: sans-serif;
  padding: 24px;
}
</style>