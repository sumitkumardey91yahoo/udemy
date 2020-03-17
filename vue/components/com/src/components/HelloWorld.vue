<template>
  <div>done</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: ['msg', 'items'],
  
data() {
    return {
      clickCount: 0,
    }
  },
  computed: {
    backgroundColor() {

      if(this.clickCount % 2 === 0) {
        return { 'backgroundColor': 'pink'}
      } else {
         return { 'backgroundColor': 'red'}
      }
 
    }
  },
  methods: {
    onClick() {

      console.log(this.backgroundColor)
      this.clickCount += 1;
    }
  },
  render(createElement) {
    const button = createElement('button', {
      on: {
        click: this.onClick
      }
    }, 'Click me');
    
    const counter = createElement('span', {
      class: this.backgroundColor,
    }, [
      'Number of clicks:',
      this.clickCount
    ]);
    
    return createElement('div', [
      button, counter
    ])
  }
 }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.backgroundColor {
  color: red
}
</style>
