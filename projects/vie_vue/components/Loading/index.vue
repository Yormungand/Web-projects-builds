<template>
  <div class="showX">
    <div class="loading">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script>
import loadingPace from "../../common/loadingPace";
export default {
  mounted() {
    if (window.Pace) {
      loadingPace();
    }
  },
};
</script>

<style scoped>
</style>