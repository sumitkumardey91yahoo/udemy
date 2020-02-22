<template>
  <div>
      <hr/>
       childA ===== {{child_data}}
     <button type="button" value="ok" @click="actChilda()"> i am child </button>
    <hr/>
      <slot name="two"></slot>
      <slot name="one"></slot>
    <GChild> </GChild>
  </div>
    
</template>

<script>
import GChild from './GChild.vue'
export default {
    data() {
        return {
            mss: 'ok'
        }
    },
    props: ['child_data'],
    components: {
        GChild
    },
    methods: {
        actChilda() {
          this.$emit('cbFunction', [100, 'i am child'])
        }
    }
}
</script>