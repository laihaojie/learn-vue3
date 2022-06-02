<script setup lang="ts">

const TestView = () => {
  return h('div', {}, ["test view", HomeView({})]);
}


const HomeView = (e) => {
  console.log(e);

  return h('div', {
    class: 'bg-red-500 text-white',
    onClick: () => {
      console.log('home view click');
    }
  }, ["home view"]);
}

const test = () => {
  console.log(1)
}

</script>

<template>
  <div class="template">
    <TestView />
    <!-- <HomeView @click="test" /> -->
    <!-- <component :is="{ template: `<div>home view</div>` }"></component> -->
  </div>
</template>

<style lang='scss' scoped>
</style>