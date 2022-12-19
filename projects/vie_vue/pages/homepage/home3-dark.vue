<template>
  <div>
    <Navbar ref="navbar" />
    <Intro3 />
    <Services2 />
    <Works2 />
    <FunFacts2 />
    <FullTestimonials withIMG="/img/testim-img.jpg" />
    <Team1 />
    <Blogs3 />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - Corporate Business Dark'
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