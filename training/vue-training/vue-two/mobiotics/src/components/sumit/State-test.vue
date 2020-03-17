<template>
  <div>
      <button type="button" @click="press"> add cart </button>
      <summary1/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import summary1 from './Summary.vue'

export default {
    methods: {
        ...mapMutations(['setProduct']),
        press() {
            // let data = [{name: 'time', data: new Date().getTime()}]
            // this.$store.commit('setProduct', data )
            this.setProduct([{name: 'time', data: new Date().getTime()}])
        }
    },
    created() {
      // setTimeout(() => {
            this.setProduct([{name: 'time', data: new Date().getTime()}])

       //})
    },
 components: {
     "summary1": summary1
 }
}
</script>

<style>

</style>