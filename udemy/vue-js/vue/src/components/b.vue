<template>
  <div>
    <!-- <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
    
           <b-button @click="toggleModal">Toggle Me</b-button>
        </b-modal>
  </div> -->

  <div class="alert alert-danger">
    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
  </div>
  <a href="#">Comments <span class="badge">10</span></a><br>

  <child @iamhere="ooo" />

  <div class="red">sdasdsad</div>
  <div class="blue">abc</div>

  ----{{data}}

  </div>    
</template>

<script>
import child from './child.vue';

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      data: 'a'
    }
  },
  watch: {
    getName() {
      this.data = this.getName;
    }
  },
  computed: {
    ...mapGetters(['getName'])
  },
  methods: {
    toggleModal() {
      console.log("okkk")
    },
    ooo(d) {
      console.log("reached", d)
    }
  },
  mounted() {

    this.data = this.getName;
    this.$store.commit("setName", "mobiotics")
    console.log("sthis.$store", this.$)
  

 
  },
  components: {
    child
  }
}
</script>

<style>
.red .blue {
  color: yellow
}
</style>