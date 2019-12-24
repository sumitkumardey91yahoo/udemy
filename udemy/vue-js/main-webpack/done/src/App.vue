<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component v-if="sumit" :is="sumit"> </component>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  data() {
    return {
      sumit: ''
    }
  },
  mounted() {
    console.log("aa")
    setTimeout(() => {
     this.sumit = () => import(/* webpackChunkName: "custom-name" */ '@/components/HelloWorld')
     
    }, 3000)
    
  }
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
