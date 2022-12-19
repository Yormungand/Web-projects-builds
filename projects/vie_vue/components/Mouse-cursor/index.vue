<template>
  <div>
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
  </div>
</template>

<script>
import mouseEffect from "../../common/cursorEffect";
export default {
  name: "MouseCursor",
  mounted() {
    mouseEffect();
  },
};
</script>

<style scoped>
</style>