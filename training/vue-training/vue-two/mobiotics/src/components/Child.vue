<template>
  <div>
      {{mss}}

  </div>
    
</template>

<script>
export default {
    data() {
        return {
            mss: 'ok'
        }
    },
    props: ['dataset']
}
</script>