<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     <!-- <div v-for="(item, index) in items" :key="index">
        <HelloWorld msg="Welcome to Your Vue.js App" :items="item">
          <p> love u</p>
        </HelloWorld>
     </div> -->

     <HelloWorld msg="Welcome to Your Vue.js App"  :items="items"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      items: [],
      ok: ''
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
      fetch('http://localhost:9000/students')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       // console.log(data)
        setTimeout(() => {
             this.items = data
        }, 3000)
     
      }); 
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
