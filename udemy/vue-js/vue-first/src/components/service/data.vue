<template>
  <div>
      {{msg | upper}}

      <h1 v-mobiotics="age" v-for="(age, index) in ages" :key="index"> {{age}} </h1>
  </div>   
</template>

<script>
import Vue from 'vue';
import { mix } from '../mixins';

Vue.filter('upper', (data)=> {
 return data.toUpperCase() + 100;
})

Vue.directive("mobiotics", (el, binding, node) => {
    console.log("binding", binding);
    console.log("el", el);
    console.log("node", node);

    if (binding.value > 20) {
        el.style.background = "red"
    } else {
        el.style.background = "yellow"

    }
    
})

export default {
    data() {
        return {
            msg: "test",
            ages: [10, 5, 40, 19, 44, 99]
        }
    },
    created() {
        console.log("created")
    },
    mounted() {
        this.sum(1900);
        console.log("mounted")
    },
    mixins: [mix]
}
</script>

<style>

</style>