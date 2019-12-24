<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutation, mapActions} from 'vuex'
export default {
  name: 'App',

  computed: {
    ...mapGetters([
      'getName'
    ])
  },
  mounted() {
    console.log(this.getName)
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
