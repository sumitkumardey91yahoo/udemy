<template>
  <div>
      <b>i am child</b>
     {{mss | reverse}}
  </div>
    
</template>

<script>
export default {
    data() {
        return {
            mss: 'kolkata'
        }
    },
    mounted() {
        console.log("router", this.$route)
        //this.mss = this.$route.params.id;
    },
    props: ['dataset']
}
</script>