<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <T1 item="test" />
  </div>
</template>

<script>
import T1 from "./components/T1";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    T1,
    // HelloWorld
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
