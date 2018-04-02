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
  
  $background: #FFDA00;
  $text: #000;
  $light: #fd8787;
  
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
    background: $background;
    color: $text;
  }

  h1 {
    font-family: 'Dawning of a New Day', cursive;
    font-size: 80px;
    margin: 0.1em auto;
    text-shadow: 2px 2px #fff;

    @media (min-width: 768px) {
      margin: 0.5em auto;      
    }
  }

  button {
    padding: 0.7em 1em;
    color: $background;
    background: #000;
    border: 0;
    border-bottom: 2px solid $background;
    outline: none;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.12em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
</style>
