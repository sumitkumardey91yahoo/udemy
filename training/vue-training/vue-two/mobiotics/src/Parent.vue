<template>
  <div>
  i am from parent components {{mss[1]}}
      <h1 :style="{color: getColor}">Color Vuex {{getColor}} </h1>
      <h1>{{name}}</h1>

      <childA :child_data="100909" @cbFunction="pressMe">

       <h1 slot="one"> i am here=== </h1>

       <h1 slot="two"> i am here  done ***</h1>
    
      </childA>

  </div>
    
</template>

<script>
import childA from './components/ChildA.vue'
import { eventBus } from './event';

import mixin  from './mixins'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            mss: "bangalore",
            name: '',
            dil: 900000
        }
    },
    computed: {
      ...mapGetters(['getColor'])
    },
    methods: {
      ...mapMutations(['setColor']),
      ...mapActions(['actLocation']),
      pressMe(e) {
        console.log("reached====>", e)
        this.mss = e;
      }
    },
    mounted() {
      setTimeout(() => {
        this.setColor('blue');
      }, 3000)


     this.actLocation("here").then((done) => {
       
       this.name = done.city.names.en;

       console.log("done===", done)
     }).catch(() => {
       console.log("okkk")
     })
  
    console.log(this.sum() + 100089);

    },
    created() {
      eventBus.$on('event-g-child', (e) => {
        this.mss =  e;
      })
    },
    beforeDestroy() {
       this.mss = null;
      
    },

    destroyed() {
      console.log(this); // I'm text inside the component.  
    },
    components: {
      childA
    },
    mixins: [mixin]
}
</script>