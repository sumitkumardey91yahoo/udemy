<template>
  <div>
      <h1 :style="{color: getColor.name  }"> mobiotics </h1>

     <button type="button" @click="sendData()"> grandChild </button>
  </div>
</template>

<script>
import { eventBus } from '../eventBus'
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getColor']),
    dataset() {
      return {"compu": new Date().getTime()};
    }
  },
  watch: {
    getColor(val) {
      console.log(this.getColor)
      this.getA(val);

    }
  },
  methods: {
    ...mapMutations(['setColor']),
    dataset1() {
      return {"fun": new Date().getTime()};
    },
    sendData() {
      console.log(this.dataset1(a));
      console.log(this.dataset);
      eventBus.$emit("send-from-child", 1000)
    }
  }
}
</script>

<style>

</style>