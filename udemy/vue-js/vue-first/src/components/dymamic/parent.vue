<template>
  <div>
     <h1> parent </h1>
     <!-- <component :is="com" @regEvent="cb" :title="mobbiotics"></component> -->
        <dyna @regEvent="cb" :title="mobbiotics"></dyna>
     parent <h1> {{full}}</h1>
     
  </div>
</template>

<script>
import child from './child.vue'
import childOne from './childOne'
import dyna from './indepen.vue'

export default {
    data() {
        return {
            com: '',
            full: '',
            mobbiotics: "mobiotics hsr lay"
        }
    },
    methods: {
        switchCom() {
            this.com = childOne;
        },
        cb(data) {
            this.full = data;
        }
    },
    components: {
        dyna
    },
    mounted() {
        this.$store.commit("setSubscription", "mobiwiki");
       console.log("store", this.$store.getters.getSubscription)
    }
}
</script>

<style>

</style>