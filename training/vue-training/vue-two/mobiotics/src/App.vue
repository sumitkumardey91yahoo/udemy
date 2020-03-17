<template>
  <!-- html part  props -->
  <div>
   <router-view></router-view>



   <!-- <nice-handsome-button :rounded="true" color="red" size="large">My Button</nice-handsome-button> -->

  </div>
</template>

<script>
//import Vue from 'vue'
// import NiceHandsomeButton from "sumit-kumar-dey-popup";
// import NiceHandsomeButton from "nice-handsome-button";

// Vue.use(NiceHandsomeButton);

import { eventBus } from './event'


// Vue.use(NiceHandsomeButton);

  export default {
    data() {
      return {
        arr: [],
        edata: 'not changed'
      }
    },
    methods: {
        pressMe() {
          eventBus.$emit("sumit-sumit")
        }

    },
    components: {
      // 'nice-handsome-button' : NiceHandsomeButton
    },
    mounted() {
       console.log("done", 233229999)
      this.arr = [100, 200, 300, 400];
    },
    created() {
      eventBus.$on('event-data-global', (data) => {
       alert(data)
      })

      eventBus.$on('sumit', () => {
          console.log("sumit")
      })
    }
  }
</script>

