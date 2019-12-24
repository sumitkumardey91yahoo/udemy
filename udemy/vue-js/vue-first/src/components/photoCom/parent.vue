<template>
  <div> 
    <child-com :photolist="database"></child-com>
  </div>
</template>

<script>
import child from './child.vue'

export default {
  data() {
    return {
     database: []
    }
  },
  mounted() {
      this.database = [ 
          {name: "one", url: 'https://carousal.cloud.altbalaji.com/prod/mobile/series-289-01.jpg'},
          {name: "two", url: 'https://carousal.cloud.altbalaji.com/prod/mobile/media-4653-03.jpg'},
          {name: "three", url: 'https://carousal.cloud.altbalaji.com/prod/mobile/series-289-01.jpg'},
          {name: "four", url: 'https://carousal.cloud.altbalaji.com/prod/mobile/media-4653-03.jpg'}
          
          ]
  },
  components: {
    'child-com': child
  }
}

</script>