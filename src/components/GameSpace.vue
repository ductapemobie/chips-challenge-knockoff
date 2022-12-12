<template>
  <div class="game-space">
    <div v-for="row in gameStore.displayBoard" class="game-row">
      <GameSquare :square="square" v-for="square in row" class="game-square"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameSquare from './GameSquare.vue';
import { getGameStore } from '@/store/game-store'
const gameStore = getGameStore();

</script>

<style lang="scss" scoped>
.game-space {
  margin: auto;
  width: 630px;
  height: 630px;
  background-color: green;
  display: flex;
  flex-direction: column;
  .game-row{
    display: flex;
    flex-direction: row;
    flex: 1;
    .game-square {
      flex: 1;
    }
  }
}
</style>
