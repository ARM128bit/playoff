<template>
  <draggable
    :list="gamers"
    class="list-group"
    group="gamers"
    @start="drag = true"
    @end="drag = false"
  >
    <div class="match" :key="matchIndex">
      <div class="match__content">{{ gamer }}</div>
    </div>
  </draggable>
</template>

<script>
export default {
  name: "gamer",
  props: {
    gamer: {
      type: String,
    },
  },
  methods: {},
  computed: {},
};
</script>

<style>
.match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  padding: 6px 0;
  flex-grow: 1;
  position: relative;
}
.match::before {
  content: "";
  display: block;
  min-height: 30px;
  border-left: 2px solid purple;
  position: absolute;
  left: -10px;
  top: 50%;
  margin-top: -15px;
  margin-left: -2px;
}
.match:nth-child(odd)::after {
  content: "";
  display: block;
  border: 2px solid transparent;
  border-top-color: purple;
  border-right-color: purple;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  top: 50%;
}
.match:nth-child(even)::after {
  content: "";
  display: block;
  border: 2px solid transparent;
  border-bottom-color: purple;
  border-right-color: purple;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  bottom: 50%;
}
.match__content {
  border: "2px solid green";
  width: "100%";
  height: "30px";
  position: "relative";
}
.match__content::before {
  content: "";
  display: block;
  width: 10px;
  border-bottom: 2px solid purple;
  margin-left: -2px;
  position: absolute;
  top: 50%;
  left: -10px;
}
</style>
