<template>
  <div class="container">
     <div v-for="(item, index) in dataset"  style="margin: 10px; position: relative;" :key="index"  @mouseover="hover($event, item.title)"
      @mouseleave="leave($event, index)">
       <div> 
         <img :src="item.images[0].url" style="width: 220px"  />
          <div class="title overlay" v-show="item.title == title">{{title}}</div> 
        
        <p class="title">{{item.shortDescription}}</p>
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
      dataset: [],
      status: false,
      title: '',
      obj: { "z-index": 2000}
    }
  },
  components: {
    Logo
  },
  methods: {
    hover(index, title) {
      this.title = title;
      index.currentTarget.style.zIndex = 200
    },
    leave(index) {
      this.title = ""
      index.currentTarget.style.zIndex = 0
    }
  },
  mounted() {

    console.log(window.navigator)
    fetch('https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/trending-home-1?domain=IN&page=1&size=12').then((res) => {
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
  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 200px
  }

 
.overlay {
  position: absolute; 
  bottom: 10px; 
  background: rgb(0, 0, 0);
  color: #f1f1f1; 
  transition: .1s ease;
  opacity:0;
  color: red;
  font-size: 15px;
  width: 100%;
  padding: 10px;
  text-align: center;
}

.container:hover .overlay {
  opacity: 1;
  
}
img {
  border-radius: 20px;
}
img:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: .5s ease;
}
.container {
      display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: flex-start;
    text-align: center;
    margin-left: 4%;
    margin-top: 10px;
}
</style>
