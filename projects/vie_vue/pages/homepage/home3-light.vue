<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <Intro3 />
    <Services2 />
    <Works2 />
    <FunFacts2 />
    <FullTestimonials withCOLOR />
    <Team1 />
    <Blogs3 />
    <Footer hideBGCOLOR />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Corporate Business light'
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>