<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const state = ref({
  name: 'Banana',
  color: 'Yellow',
  size: 'Medium',
  count: 0,
})

useStorage('vue-use-local-storage', state)

const text = JSON.stringify(state)
</script>

<template>
  <div flex flex-col>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">
    <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">

    <pre lang="json">{{ text }}</pre>
  </div>
</template>
