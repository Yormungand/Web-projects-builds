<template>
  <div>
    <Navbar ref="navbar" lr="logoRef" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <AboutUs2 />
      <Services1 lines />
      <Portfolio grid="2" filterPosition="left" />
      <VideoWithTestimonials />
      <Clients2 theme="light" length="4" />
      <Team1 />
      <Blogs4 />
      <SContactForm />
      <Footer hideBGCOLOR />
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Business One Page Light'
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