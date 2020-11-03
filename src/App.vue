<template>
  <div id="app">
    <h1 class='appTitle'>namaewa</h1>
    <AllProfiles />
  </div>
</template>

<script>
import AllProfiles from './components/AllProfiles.vue'

export default {
  name: 'App',
  components: {
    AllProfiles
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
  margin-top: 60px;
}
</style>
