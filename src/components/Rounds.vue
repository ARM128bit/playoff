<template>
  <div class="tournament-brackets">
    <div class="bracket">
      <template v-for="(round, index) in grid">
        <div class="round" :key="index" :class="['round-' + index]">
          <Match
            v-for="(item, matchIndex) in round"
            :gamer="item"
            v-bind:key="matchIndex"
          />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Match from "./Match.vue";

const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1];
export default {
  name: "match",
  components: {
    Match,
  },
  props: {
    grid: {
      type: Object,
      default: () => [],
    },
  },
  computed: {
    rounds() {
      return defaultRounds.filter((rounds) => rounds <= this.bracketSize);
    },
    rootRounds() {
      return [];
    },
  },
};
</script>
<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
.bracket {
  display: flex;
}
.round {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.round:first-child .match::before {
  display: none;
}
.round:first-child .match__content::before {
  display: none;
}
.round:last-child .match::after {
  display: none;
}
</style>
