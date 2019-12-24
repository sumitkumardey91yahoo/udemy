<template>
  <div>
      <h1> i am child </h1>
      <button type="button" @click="actChild()">okay</button>
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
import { mapGetters, mapMutations } from 'vuex' 
export default {
    data() {
        return {
            abc: 0
        }
    },
    methods: {
        ...mapMutations(['setName']),
        actChild() {
            
            console.log("reached")
            let obj = {}
             obj.count = ++this.abc;
             obj.name = true
            
            this.setName( obj.count);
            eventBus.$emit("parent-child", obj)
        }
    }
}
</script>

<style>

</style>