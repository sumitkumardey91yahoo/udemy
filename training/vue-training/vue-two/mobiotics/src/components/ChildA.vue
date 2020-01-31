<template>
  <div>
     childA
     <button type="button" value="ok" @click="actChilda()"> Done </button>

  </div>
    
</template>

<script>
export default {
    data() {
        return {
            mss: 'ok'
        }
    },
    methods: {
        actChilda() {
           // console.log("press");
           // alert("childA")
           this.$emit('childa-parent', {name: 'mob'});

        }
    }
}
</script>