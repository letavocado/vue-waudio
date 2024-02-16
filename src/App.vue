<script setup lang="ts">
import { ref } from 'vue'
import AudioComponent from './components/AudioComponent.vue'

const isPlaying = ref(false)

const onPlay = () => (isPlaying.value = true)
const onPause = () => (isPlaying.value = false)
</script>

<template>
  <div
    class="relative bg-[#161b22] w-full h-screen flex items-center justify-center z-10 overflow-hidden"
  >
    <div class="mask"></div>
    <div
      ref="shineRef"
      class="absolute bg-[#939aff] blur-[180px] will-change-transform mix-blend-overlay rounded-[300px] pointer-events-none -z-10 top-0 w-[80rem] h-[80rem]"
      :class="{ 'animate-blob': isPlaying }"
      style="animation-delay: 2s"
    ></div>

    <AudioComponent
      url="./Mozart-Andante.mp3"
      @play="onPlay"
      @pause="onPause"
    />
  </div>
</template>

<style scoped></style>
