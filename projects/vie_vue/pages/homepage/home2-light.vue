<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <Intro2 />
    <Services1 oStyle="4item" />
    <Video />
    <Portfolio :grid="3" filterPosition="center" />
    <FullTestimonials noPadding />
    <Team2 theme="light" />
    <Blogs2 />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Creative Agency Light'
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