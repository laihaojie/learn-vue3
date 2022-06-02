<script setup lang="ts">

const HomeView = (e) => {
  console.log(e);
  
  return h('div', {
    onClick: () => {
      console.log('home view click');
    }
  }, 'home-view')
}

const test = () => {
  console.log(1)
}

</script>

<template>
  <div>
    <HomeView @click="test" />

  </div>
</template>

<style lang='scss' scoped>
</style>