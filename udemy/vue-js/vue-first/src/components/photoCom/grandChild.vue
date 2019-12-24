<template>
    <img :src="singlePhoto.url" style="width:100%">
</template>

<script>
import grandChild from './grandChild.vue'
export default {
  data() {
    return {

    }
  },
  watch: {
      singlePhoto() {
           console.log("single", this.singlePhoto);
      }
  },
  props:["singlePhoto"],
 
  mounted() {
   // console.log(this.photolist);
  },
}

</script>