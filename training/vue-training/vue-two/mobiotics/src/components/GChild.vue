<template>
    <div>
        <h1 :style="{color: getColor}"> I am Grand Child {{getColor}} </h1>

        <button type="button"  @click="actGchild()"> i am G child </button>
    </div>   
</template>

<script>
import { eventBus } from '../event'
import { mapGetters } from 'vuex'
export default {
   methods: {
       actGchild() {
           console.log("done G child");
           eventBus.$emit('event-g-child', [100, 'i am g child'] )
         
           this.$router.push({name: 'vuex'})
       }
   },
    computed: {
      ...mapGetters(['getColor'])
    }, 
}
</script>