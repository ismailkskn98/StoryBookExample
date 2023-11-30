<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Switcher />
</template>

<script>
import Switcher from './components/Switcher/index.vue'
import HelloWorld from './components/HelloWorld/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Switcher
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
