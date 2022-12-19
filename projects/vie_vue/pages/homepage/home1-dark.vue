<template>
  <div>
    <Navbar ref="navbar" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <AboutUs1 />
      <Services1 />
      <Works1 />
      <FunFacts1 />
      <VideoWithTestimonials />
      <SkillsCircle theme="dark" />
      <Clients1 theme="dark" />
      <Blogs1 />
      <CallToAction />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - Main Demo Dark'
    };
  },
  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
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