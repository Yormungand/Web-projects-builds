<template>
  <div>
    <Navbar ref="navbar" lr="logoRef" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <Services4 serviceMB50 />
      <AboutUs4 />
      <FunFacts1 />
      <Works4 classText="blackFilterColor" />
      <FullTestimonials />
      <Blogs2 />
      <CallToAction img="/img/patrn1.png" />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Modern Agency Light'
    };
  },
  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
    var navbar = this.$refs.navbar.$el,
      logo = this.$refs.navbar.$refs.lr;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/img/logo-dark.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/img/logo-light.png");
      }
    });
  },
};
</script>

<style scoped>
</style>