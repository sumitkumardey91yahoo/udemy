<template>
  <div>
      i am vuex
  </div>
    
</template>

<script>

export default {
    data() {
        return {
        
        }
    },
    computed: {

    },
    mounted() {

    },
    created() {
     
    },
    beforeRouteLeave(to, from, next) {
      var a = window.confirm("are you want to leave");
      if(a) {
        next(true);
      } else {
        next(false);
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log("to", to, this);
      console.log("from", from);
      let a = 100;
      if(a === 100) {
        next();
      } else {
        next({name: 'index'})
      }
      
    }
}
</script>