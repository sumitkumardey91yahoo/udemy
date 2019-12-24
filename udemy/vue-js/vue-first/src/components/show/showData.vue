<template>
  <div>
      i am show {{ url }}

      {{query}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      query: ''
    }
  },
  mounted() {
    this.url = this.$route.params.showId;
    this.query = this.$route.query.test
    console.log(this.$route.query)
  }
}
</script>

<style>

</style>