<template>
  <div>
      i am parent  {{msg}}
      <h1 v-show="action">child clicked</h1>

      {{getName}}
      
      <hr/>
      <child/>
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
import child from './child'

import { mapGetters, mapMutations } from 'vuex' 


export default {
    data() {
        return {
            msg: 0,
            action: false
        }
    },
    computed: {
     ...mapGetters(['getName'])
    },
    components: {
        child
    },
    created() {
        console.log("parent")
      
       eventBus.$on('parent-child', (data) => {
           this.msg = data.count;
           this.action = data.name;
       }); 
    }
}
</script>

<style>

</style>