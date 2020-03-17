<template>
  <div>
     sjhsj
    <button type="button" @click="pressMe">sumit--------</button>


  </div>
    
</template>

<script>

import { eventBus } from './event';

import mixin  from './mixins'

import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
    data() {
        return {
            mss: "bangalore",
            name: '',
            dil: 900000,
            count: 1
        }
    },
    computed: {
      ...mapGetters(['getColor'])
    },
    methods: {
      ...mapMutations(['setColor']),
      ...mapActions(['actLocation']),
   

       pressMe() {
         if(this.count < 5) {
           this.$router.push('/vuex')
         
         }
           this.count++;
          eventBus.$emit("sumit-sumit")
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
    mixins: [mixin]
}
</script>