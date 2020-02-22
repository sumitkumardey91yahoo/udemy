<template>
  <!-- html part  props -->
  <div>
   <router-view></router-view>
  </div>
</template>

<script>

import { eventBus } from './event'

  export default {
    data() {
      return {
        arr: [],
        edata: 'not changed'
      }
    },
    methods: {
      
    },
    mounted() {
       console.log("done", 233229999)
      this.arr = [100, 200, 300, 400];
    },
    created() {
      eventBus.$on('event-data-global', (data) => {
       alert(data)
      })
    }
  }
</script>

