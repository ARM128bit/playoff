<template>
  <div class="gamer">
    <div class="gamer__content">{{ gamer }}</div>
  </div>
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
.gamer {
  display: flex;
  padding: 6px 0;
}
.gamer__content {
  border: 2px solid rgb(100, 100, 255);
  width: 100%;
  height: 30px;
  position: relative;
  margin: 0 auto;
}
</style>
