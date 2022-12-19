<template>
  <div>
    <Navbar ref="navbar" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <AboutUs2 />
      <Services1 lines />
      <Portfolio grid="2" filterPosition="left" />
      <VideoWithTestimonials />
      <Clients2 theme="dark" length="4" />
      <Team1 />
      <Blogs4 />
      <SContactForm />
      <Footer hideBGCOLOR />
    </div>
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - Business One Page Dark'
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