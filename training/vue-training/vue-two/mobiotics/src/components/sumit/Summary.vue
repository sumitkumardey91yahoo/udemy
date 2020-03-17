<template>
  <div>
      <h1> 
          i am summary
      </h1>
    <p v-for="(data, index) in products" v-bind:key="index">
        <span class="done">{{getI(data.data)}}</span>
    </p>
  </div>   
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
    data(){
        return {
           products: []
        }
    },
 computed: {

     ...mapState(['product'])
 },
 methods: {
          ...mapGetters(['getProduct']),
     getI(val) {
         return val + "sumit"
     }
 },
 watch: {
    //  getProduct(val) {
    //      this.products = val
    //  }
 }, created() {
     console.log("reached")
     this.getProduct = [{data: 'sumit'}]
    // this.products = this.getProduct;
 }
}
</script>

<style>

</style>