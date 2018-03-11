<template>
  <div id="app">
    <h1>Recepter</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day');
  h1 {
    font-family: 'Dawning of a New Day', cursive;
    font-size: 80px;
    margin: 0.5em auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
  }

  button {
    padding: 1em;
    background: none;
    border: 1px solid black;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
</style>
