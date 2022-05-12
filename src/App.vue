<!-- <script lang="ts">
export default {
  name: 'App',
  provide: {
    name: 'test',
    age: 19,
  }
}
</script> -->
<script setup lang="ts">
const provides = {
  name: 'test',
  age: 19,
}
Object.keys(provides).forEach((key) => {
  provide(key, provides[key as keyof typeof provides]);
});
// provide('name', '张三');
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
</template>
