<template>
<div>
  <div>{{msg.title}}</div>
   <h1 v-for="d in a">{{d}}</h1>

</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters} from 'vuex'

import Service from '../../classApi';

console.log(Service)

export default {
  data() {
    return {
      msg: '',
     a: 3 
    }
  },
  methods: {
    ...mapActions([
      'actGetApi'
    ]),
    ...mapMutations([
      'setBaseUrl'
    ])
  },
  mounted() {

   let obj = new Service('https://altbalajigeo.firebaseapp.com/fire.json?');

   console.log("obj>>>>>>", obj)

   obj.actData(1).then((res)=> {
        this.msg = res;
    }, (error) => {
      console.log(error)
      this.msg = error;
    })

  //   this.setBaseUrl('https://jsonplaceholder.typicode.com');

  //   this.actGetApi(1).then((res)=> {
  //       this.msg = res;
  //   }, (error) => {
  //     console.log(error)
  //     this.msg = error;
  //   })
   }
}
</script>

<style>

</style>