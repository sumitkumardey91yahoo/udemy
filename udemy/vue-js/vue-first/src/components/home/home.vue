<template>
  <div>
      i am homewma
      <input type="button" @click="switchPage()" value="home"/>
      <child :menus='[{name: 12}]'/>
  </div>
</template>

<script>
import child from './child.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        child
    },
    methods: {
        switchPage() {
            console.log("home");
            this.$router.push({name: 'showPage', params: {showId: 400}, query: { data: 700}});
        }
    }
}
</script>

<style>

</style>