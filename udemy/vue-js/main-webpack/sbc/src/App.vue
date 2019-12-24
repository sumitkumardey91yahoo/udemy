<template>
  <div id="app">
    <sumit/>
    <sumit1/>

    <sumit2/>

  </div>
</template>

<script>

const sumit1 = () => import('@/components/HelloWorld')


const sumit2 = () => import('@/components/HelloWorld')

const sumit3 = () => import('@/components/HelloWorld')

export default {
  name: 'App',
  components: {
    sumit: () => import('@/components/HelloWorld'),
    sumit1,
    sumit2,
    sumit3
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
