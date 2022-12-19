<template>
  <div>
    <MouseCursor />
    <ScrollToTop />
    <Loading />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'light',
  mounted() {
    setTimeout(() => {
      new WOW().init();
      Splitting({ target: "[data-splitting]" });
    });
  },
};
</script>

<style>
@import "@/assets/css/light.css";
@import "@/assets/css/globals.css";
</style>