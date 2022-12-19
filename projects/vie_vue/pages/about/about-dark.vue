<template>
  <div>
    <Navbar ref="navbar" />
    <PagesHeader imageLink="/img/slid/about.jpg">
      <template v-slot:title>
        Our dedicated team of creatives is bursting with talent, experience and
        passion for what we do.
      </template>
    </PagesHeader>
    <AboutIntro />
    <Services1 oStyle="4item" />
    <VideoWithTestimonials />
    <SkillsCircle from="aboutPage" />
    <Team1 />
    <MinimalArea1 />
    <Clients1 theme="dark" />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - About Dark'
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