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
  
  $background: #FF483C;
  $text: #fff;
  $dark: #7F322B;
  $light: #FF889A;
  
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
    text-shadow: 2px 2px $light;

    @media (min-width: 768px) {
      margin: 0.5em auto;      
    }
  }

  button {
    padding: 1em;
    color: $text;
    background: $light;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    outline: none;
    transition: background 0.5s ease-in-out;

    &:active {
      background: darken($light, 4%);
    }
  }
</style>
