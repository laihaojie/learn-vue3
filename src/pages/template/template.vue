<script setup lang="ts">

const HomeView = (e) => {
  console.log(e);

  return h('div', {
    onClick: () => {
      console.log('home view click');
    }
  }, 'home view');
}

const test = () => {
  console.log(1)
}

</script>

<template>
  <div class="template">
    <HomeView @click="test" />
    <component :is="{ template: `<div>home view</div>`}"></component>
  </div>
</template>

<style lang='scss' scoped>
</style>