<script setup lang="ts">
import TestComp from './comp.vue'

function TestView() {
  return h('div', {}, ['test view', HomeView({}), h(TestComp), h(() => h('div', {}, 'div')), h(() => 'div1'), h({ template: '<div>home view</div>' })])
}

function HomeView(e) {
  console.log(e)

  return h('div', {
    class: 'bg-red-500 text-white',
    onClick: () => {
      console.log('home view click')
    },
  }, ['home view'])
}

function test() {
  console.log(1)
}
</script>

<template>
  <div class="template">
    <TestView />
    <!-- <TestComp></TestComp> -->
    <!-- <HomeView @click="test" /> -->
    <!-- <component :is="{ template: `<div>home view</div>` }"></component> -->
  </div>
</template>

<style lang='scss' scoped>
</style>
