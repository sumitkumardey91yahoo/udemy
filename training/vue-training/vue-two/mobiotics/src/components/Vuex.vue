<template>
  <div>
      i am vuex 
      <button type="button" @click="press">sumit</button>
  </div>
    
</template>

<script>
import { eventBus } from '../event'

export default {
    data() {
        return {
          data: 1
        }
    },
    methods: {
      press() {
       // eventBus.$emit("sumit", 100);
        this.$router.push('/')

       
      }
    },
    computed: {

    },
    mounted() {

    },
    created() {
       eventBus.$on("sumit-sumit", () => {
          console.log("-----", this.data++)
        });
       
    },
    // beforeRouteLeave(to, from, next) {
    //   var a = window.confirm("are you want to leave");
    //   if(a) {
    //     next(true);
    //   } else {
    //     next(false);
    //   }
    // },
    // beforeRouteEnter(to, from, next) {
    //   // console.log("to", to, this);
    //   // console.log("from", from);
    //   let a = 100;
    //   if(a === 100) {
    //     next();
    //   } else {
    //     next({name: 'index'})
    //   }
      
    // }
}
</script>