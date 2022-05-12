<script setup lang="ts">
const count = ref(0);
const test_comp = ref<{ a: number } | null>(null);
const add = () => {
  count.value++;
}
onMounted(async () => {
  await nextTick();
  console.log(test_comp.value?.a);
});

watch(count, (value) => {
  console.log(value);
});

const name = inject('name')
const age = inject('age')


</script>
<!-- <script lang="ts">
export default {
  inject: ['name', 'age'],
}
</script> -->

<template>
  <div>
    <div>{{ count }}{{ name }}{{ age }}</div>
    <TestComp ref="test_comp" :count="count"></TestComp>
    <button @click="add">按钮</button>
  </div>
</template>
