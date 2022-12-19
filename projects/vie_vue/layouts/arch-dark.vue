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
  name: "arch-dark",
  mounted() {
    setTimeout(() => {
      new WOW().init();
      Splitting({ target: "[data-splitting]" });
    });
  },
};
</script>

<style>
@import "@/assets/css/dark.css";
@import "@/assets/css/arch-skin-dark.css";
@import "@/assets/css/globals.css";
</style>