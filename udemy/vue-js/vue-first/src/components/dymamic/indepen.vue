<template>
  <div class="abc">
       <h1> {{header}}</h1>
     <input type="text" v-model="dataPass" />
     <button @click="pass"> okay</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dataPass: '',
            header: ''
        }
    },
    watch: {
        title() {
          this.header = this.title;  
        }
    },
    props: ["title"],
    methods: {
        pass() {
            this.$emit("regEvent", this.dataPass)
            //console.log(this.dataPass)
        }
    },
    mounted() {
        console.log()
        this.header = this.title;
    }
}
</script>

<style>
    .abc {
        background: red;
    }
</style>