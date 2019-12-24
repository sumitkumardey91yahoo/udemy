<template>
  <div id="app">
    <router-view/>
    <!-- {{msg}}
    {{getName | upper}}
    <component :is="msg"></component>
    <h1 v-for="data in arr" v-raj="data">{{data}}</h1>
    <test/>

    {{ getPaytm }} -->
  </div>
</template>

<script>
import vue from 'vue';
import { mix } from './mixings'
import test from './components/a.vue'
import { mapMutations, mapGetters, mapActions} from 'vuex';

vue.directive("raj", (el, binding, vnode) => {
    if (binding.value > 30) {
      el.style.background = "red"
    } else {
       el.style.background = "yellow"
    }
    console.log("bind", binding);
  
});
vue.filter("upper", (data) =>{
  return data.toUpperCase();
});
export default {
  name: 'app',
  data () {
    return {
      msg: false,
      arr: [22,33,55,31,10,20]
    }
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['actPaytm'])
  },
  computed: {
    ...mapGetters([
      'getName',
      'getPaytm'
    ])
  },
  components: {
    test
  },
  mounted() {
    this.actPaytm(12);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    this.msg = json
  })
    console.log("<<<<<<<", this.$store)
    this.sum()
      //const playerScreen = () => import ('@/components/player/PlayerScreen.vue');
    this.msg = () => import('./components/a.vue');
 
    // this.$router.push({name: 'abc', params: { id: 'hello-world' }, query: {ok: 12}});
  },
  created() {
    console.log("a")
       this.setName("raga")
  },
  mixins: [mix]
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
