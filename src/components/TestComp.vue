<script setup lang="ts">
defineProps({
  count: Number,
})
defineExpose({
  a: 1
})
</script>

<template>
  <div>test1 {{ count }}</div>
</template>
