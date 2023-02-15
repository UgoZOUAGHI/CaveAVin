<template>
  <NavigationBar />
  <router-view> </router-view>
</template>

<script>
import NavigationBar from '/src/components/NavigationBar.vue'
//import Carte from 'src/components/Carte.vue'
export default {
  name: 'App',
  components: {
    NavigationBar
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>