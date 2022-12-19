<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <Intro4 theme="light" />
    <AboutUs3 />
    <Works3 />
    <Services3 />
    <MinimalArea2 />
    <FullTestimonials classText="pb-0" />
    <Team1 />
    <Blogs4 />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Digital Agency Light'
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