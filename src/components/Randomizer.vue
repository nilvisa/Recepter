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

<style scoped>
  .randomizer {
    max-width: 1200px;
    text-align: center;
    margin: auto;
  }

  h3 {
    font-size: 50px;
    margin: 0;
  }

  h4 {
    font-size: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  .placeholder {
    opacity: 0.3;
  }
</style>
