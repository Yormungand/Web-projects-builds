<template>
  <div>
    <NavbarFullMenu theme="light"  />
    <ShowcasesGrid />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Showcase 3 Light'
    };
  },
};
</script>

<style scoped>
</style>