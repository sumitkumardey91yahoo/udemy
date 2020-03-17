<template>
  <div>
     <h1> {{parent}} </h1>
     <input type="text" v-model="textP"/>

     <input type="text" v-model="textO"/>
     {{textP}}
     <hr/>
     <child-home :parentData="parent" @c-d-parent="done"></child-home>
  </div>
</template>

<script>
  import abc from './components/HelloWorld.vue'
  import { eventBus } from './eventBus'

  import { mapMutations } from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        parent: 'welcome',
        textP: '',
        textO: ''
      }
    },
    watch: {
      textP(val) {
        this.textO = val.toLowerCase();
      }
    },
    methods: {
      ...mapMutations(['setColor']),
      done( data) {
        console.log(data)
        this.parent = data
      }
    },
    components: {
      'child-home': abc
    },
    created() {
      // this.$on('c-d-parent', (val) => {
      //   console.log("-----", val)
      // })
     
     setTimeout(() => {
         eventBus.$on("send-from-child", (data) => {
         this.parent = data;
       })

        this.setColor({name: "yellow"});
     }, 5000)
    

    }
  }
</script>
