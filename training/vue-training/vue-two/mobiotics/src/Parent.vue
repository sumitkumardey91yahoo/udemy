<template>
  <div>
  i am from parent components
    <childA @childa-parent="doneok"></childA>

    <button type="button" @click="press()"> i am parent</button>

  </div>
    
</template>

<script>
 import childA from './components/ChildA.vue'

export default {
    data() {
        return {
            mss: 'ok'
        }
    },
    methods: {
        doneok() {
          location.href = "https://google.com"
        },
        press() {
            //this.$router.push({name: 'home'})
            window.location.href = "http://localhost:8080/home"
        }
    },
    components: {
      childA
    }
}
</script>