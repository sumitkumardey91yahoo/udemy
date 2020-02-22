<template>
  <div class="container" style="display:flex;flex-wrap: wrap;">
     
     <div v-for="item in dataset"  style="margin: 10px">
       <div>
         <img :src="item.images[0].url" style="width: 300px"/>
          <p style="    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px">{{item.title}}</p>

    <p>{{item.shortDescription}}</p>
       </div>
     </div>
     <div>
       
     </div>
  </div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      dataset: []
    }
  },
  components: {
    Logo
  },
  mounted() {
    fetch('https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/trending-home-1?domain=IN&page=1&size=7').then((res) => {
      return res.json();
    }).then((data) =>{
      console.log(data)
      this.dataset = data.content;
     // this.dataset.push(data.content)
    })

  
  }
}
</script>

<style>

</style>
