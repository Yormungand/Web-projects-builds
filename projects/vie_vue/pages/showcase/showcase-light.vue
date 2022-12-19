<template>
  <div>
    <NavbarFullMenu theme="light"/>
    <ShowcasesFullScreen />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Showcase Light'
    };
  },
};
</script>

<style scoped>
</style>