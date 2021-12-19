<template>
  <div id="app">
    
    <music-menu></music-menu>
    <keep-alive>
    <router-view></router-view>
     </keep-alive>
    <player></player>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {

  },
}
</script>

<style lang="less">

</style>
