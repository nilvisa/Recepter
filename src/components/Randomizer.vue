<template>
<div class="randomizer">
  <button v-on:click="randomize">Slumpa ingredienser</button>
  <ul>
    <li v-for="ingredient in ingredients" :key="ingredient.index">
      <h3>{{ingredient.emoji}}</h3>
      <h4 v-if="hasStarted">{{ingredient.picked}}</h4>
      <h4 v-else class="placeholder">{{ingredient.category}}</h4>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      hasStarted: false,
      ingredients: [
        {
          category: "protein",
          emoji: "🐟",
          items: [
            "dumplings",
            "fallafel",
            "halloumi",
            "kikärtor",
            "korv",
            "kräftstjärtar",
            "kyckling",
            "köttfärs",
            "lax",
            "räkor",
            "sej",
            "svarta bönor",
            "tofu",
            "tonfisk",
            "torsk",
            "ägg"
          ],
          picked: String
        },
        {
          category: "kolhydrat",
          emoji: "🍚",
          items: [
            "bröd",
            "bulgur",
            "couscous",
            "nudlar",
            "pasta",
            "potatis",
            "ris",
            "risoni",
            "rotfrukter",
            "sötpotatis"
          ],
          picked: String
        },
        {
          category: "sås",
          emoji: "🥫",
          items: [
            "curry",
            "gräddsås",
            "kokosmjölk",
            "jordnötssås",
            "masala",
            "ost",
            "remoulad",
            "soja",
            "spenatsås",
            "sötsur",
            "tomatsås",
            "vitlök",
            "yoghurt",
            "örtsås"
          ],
          picked: String
        },
        {
          category: "grönsak",
          emoji: "🥦",
          items: [
            "aubergine",
            "blomkål",
            "broccoli",
            "edamebönor",
            "grönkål",
            "majs",
            "morot",
            "paprika",
            "ruccola",
            "rödbetor",
            "rödkål",
            "spenat",
            "squash",
            "tomat",
            "vitkål",
            "ärtor"
          ],
          picked: String
        },
        {
          category: "grönsak",
          emoji: "🍅",
          items: [
            "aubergine",
            "blomkål",
            "broccoli",
            "edamebönor",
            "grönkål",
            "majs",
            "morot",
            "paprika",
            "ruccola",
            "rödbetor",
            "rödkål",
            "spenat",
            "squash",
            "tomat",
            "vitkål",
            "ärtor"
          ],
          picked: String
        },
        {
          category: "grönsak",
          emoji: "🥑",
          items: [
            "aubergine",
            "blomkål",
            "broccoli",
            "edamebönor",
            "grönkål",
            "majs",
            "morot",
            "paprika",
            "ruccola",
            "rödbetor",
            "rödkål",
            "spenat",
            "squash",
            "tomat",
            "vitkål",
            "ärtor"
          ],
          picked: String
        }
      ]
    };
  },

  methods: {
    getRandomItem(array, target) {
      const value = array[Math.floor(Math.random() * array.length)];
      return value;
    },
    randomize(e) {
      e.preventDefault();
      this.hasStarted = true;

      this.ingredients.map((ingredient, index) => {
        ingredient.picked = this.getRandomItem(ingredient.items);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .randomizer {
    max-width: 800px;
    text-align: center;
    margin: auto;
    margin-bottom: 3em;
  }

  h3 {
    font-size: 40px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }

  h4 {
    font-size: 25px;
    margin: 0.2em auto;

    @media (min-width: 768px) {
      font-size: 30px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
    list-style-type: none;
    padding: 0;
    margin-top: 2em;

    @media (max-width: 766px) {
      text-align: left;

      h3, h4 {
        display: inline-block;
      } 

      h3 {
        margin-right: 0.5em;
        vertical-align: middle;
      }     
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 3fr);
      grid-gap: 20px;      
    }
  }

  li {
    display: inline-block;
    margin: 0 0 0 3em;
    text-align: left;

    @media (min-width: 768px) {
      margin: 1em auto;
      text-align: center;
    }
  }

  .placeholder {
    opacity: 0.3;
  }
</style>
