<template>
  <div id="app">
    <input
      type="number"
      v-model="roundsCount"
      placeholder="Количество игроков"
      @change="createGamersList"
    />
    <input
      type="button"
      value="Сформировать сетку"
      @click="createTournamentTree"
    />
    {{ rounds.root }}
    <div class="tournament-grid">
      <div class="gamer-list">
        <draggable
          :list="gamers"
          class="list-group"
          group="gamers"
          @start="drag = true"
          @end="drag = false"
        >
          <Gamer v-for="(item, index) in gamers" :key="index" :gamer="item" />
        </draggable>
      </div>
      <Rounds :grid="{}" />
    </div>
  </div>
</template>
<script>
import Rounds from "./components/Rounds.vue";
import Gamer from "./components/Gamer.vue";
import Gamers from "./assets/js/gamers";
import binaryTree from "./assets/js/binaryTree";
/*import tournamentTree from "./assets/js/tournamentTree";*/

export default {
  name: "App",
  components: { Rounds, Gamer },
  methods: {
    createGamersList() {
      this.gamers = [];
      let gamers = new Gamers();
      const _count = parseInt(this.roundsCount);
      if (gamers.combintaionCountOfFullName >= _count) {
        for (let i = 0; i < _count; i++) {
          this.gamers = gamers.fillGamerArray(this.gamers);
        }
      } else {
        console.log(
          gamers.combintaionCountOfFullName,
          "Недопустимое количество стартовых участников. Количество комбинаций ИМЯ и ФАМИЛИЯ меньше введенного значения"
        );
      }
    },
    createTournamentTree() {
      const _step = 2;
      const _tourCount = Math.log2(this.roundsCount);
      const _sum = (1 - Math.pow(_step, _tourCount)) / (1 - _step);
      let _binaryTree = new binaryTree();
      let _arr = [];
      for (let i = 0; i < _sum; i++) {
        _arr.push(i + 1);
      }

      this.rounds = _binaryTree.insert(_arr);
      console.log(_binaryTree);
    },
  },
  mounted() {
    this.createGamersList();
  },
  data() {
    return {
      gamers: [],
      rounds: {},
      roundsCount: 8,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tournament-grid {
  display: grid;
  grid-template-columns: 20% 1fr;
}
</style>
