<script setup lang="ts">
const count = ref(0);
const test_comp = ref<{ a: number } | null>(null);
// const temp = '<div>111</div>'

// const cp = markRaw({
//   template: temp
// })
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

const uniTest = () => {
  // @ts-ignore
  uni.postMessage({
    data: {
      url: "https://s.lingman.tech/dev/uploadfiles/20220320/SxJrpcZ8MGG7jAGSGwzMCzYaSyfJTWdc.png",
      title: "xxxxx"
    }
  });
}
const errorTest = () => {
  // throw new Error('error1111');
  // a.a = 1
}

// const comp = { name: 'Test', render: () => h('div', 'test1') }
// const comp1 = { name: 'Test1', template: `<div>test2222</div>`, props: { a: String } }

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

    <div h10 flex justify-center items-center bg-red text-white @click="uniTest"> uni测试</div>
    <div h10 flex justify-center items-center bg-red text-white @click="errorTest"> errorHandlerTest</div>
    <!-- <TestTemplate></TestTemplate> -->
    <!-- <tab-archive></tab-archive> -->
    <!-- <component is="tab-archive"></component> -->
    <!-- <component :is="comp"></component> -->
    <!-- <div is="vue:comp1"></div> -->

    <test-cmp></test-cmp>
    <TestFolder></TestFolder>
  </div>
</template>
