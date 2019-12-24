<template>
  <div id="app">
    <router-view/>

    <h1>ssssjfhduffffbdcjvdbv {{ msg }}</h1>
    <child-tag/>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

import child from './components/child.vue';

export default {
  name: 'appqss',
  data () {
    return {
      msg: 100
    }
  },
  components: {
    'child-tag': child
  },
  // beforeCreate() {
  //   console.log("beforeCreate", this);
  // },
  created() {
    // setTimeout(() => {
    //   this.msg = 200;
    // }, 3000);
    console.log("Create app");
    // document.getElementsByTagName("h1")[0].style.fontSize = "20px"
  },
  mounted: function() {
   console.log("mounted-app");
  },
  // beforeMount() {
  //   console.log("beforeMount", this.$el);
  //    document.getElementsByTagName("h1")[0].style.fontSize = "25px"
  // },
  // updated() {
  //   console.log("updated", this.$el);
  // },
  // beforeDestory() {
  //     console.log("beforeDestory", this.$el);
  // }

}
</script>

