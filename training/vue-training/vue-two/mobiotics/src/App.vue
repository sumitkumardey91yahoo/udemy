<template>
  <!-- html part  props -->
  <div>
   i am app

   <router-view></router-view>
  </div>
</template>

<script>


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
  }
</script>

