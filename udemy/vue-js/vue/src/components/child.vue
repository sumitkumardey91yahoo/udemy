<template>
  <div>
      <input type="text" name="" id="" v-model="name">
      <input type="button" value="okay" @click="okay()">
  </div>

</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods:{
        okay() {
            this.$emit("iamhere", this.name)
            console.log(this.name)
        }
    }
}
</script>

<style>

</style>