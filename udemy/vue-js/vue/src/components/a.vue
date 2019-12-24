<template>
  <div>
      a.vue
      <router-link :to="{ name: 'home' }">sumit</router-link>

      <p @click="ok">test</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters} from 'vuex';
export default {
  data() {
    return {
      i: 0
    }
  },
    methods: {
      ...mapMutations(['setName']) ,
      ok() {
        this.i++
        this.setName(this.i)
      }
    },
    created() {
        this.setName("i am here")
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>