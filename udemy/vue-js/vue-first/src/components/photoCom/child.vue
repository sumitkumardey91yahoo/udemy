<template>
  <div style="background-color: red"> 
   <div style="text-align: center"> photo list</div>
   <div v-for="(single, index) in photolist" :key="index" class="child">
       <grandChild-com :singlePhoto="single"></grandChild-com>
       {{single.name}}
   </div>

  </div>
</template>

<script>
import grandChild from './grandChild.vue'
export default {
  data() {
    return {

    }
  },
  watch: {
      photolist() {
           console.log("test", this.photolist);
      }
  },
  props:["photolist"],
  components: {
      'grandChild-com': grandChild
  },
  mounted() {
   // console.log(this.photolist);
  },
}

</script>

<style scoped>
.child {
    float:left;
    width: 33.33%;

}
</style>