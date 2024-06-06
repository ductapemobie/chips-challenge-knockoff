<template>
  <div class="app"
    @keydown="handleInput"
    ref="appRef"
    tabindex="0"
  >
    <TopHeader />
    <GameSpace />
  </div>
</template>

<script setup lang="ts">
import GameSpace from './components/GameSpace.vue';
import TopHeader from './components/TopHeader.vue';
import { onMounted, ref } from 'vue';
import { getGameStore } from './store/game-store';

const gameStore = getGameStore();
const appRef = ref<HTMLInputElement | null>(null);

function handleInput(event: any){
  gameStore.handleKeypress(event.key);
}
const val = console;
onMounted(function() {
  appRef.value?.focus();
})
</script>

<style scoped>
.app{
  width: 100vw;
  height: 100vh;
}
</style>
