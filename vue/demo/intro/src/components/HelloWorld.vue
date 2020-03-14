<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     {{parentData}}
 

     <button type="button" @click="send()"> send </button>

   <hr/>
    <done/>
  </div>
</template>

<script>
import done from './child.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'i am child'
    }
  },
  props: ['parentData'],
  methods: {
    send() {
        console.log("1")
        this.$emit('c-d-parent', this.msg)
    }
  },
  mounted() {

  },
  components: {
    done
  }

}
</script>
