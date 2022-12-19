<template>
  <div>
    <Navbar ref="navbar" />
    <FreelancreIntro />
    <Services5 />
    <Works5 />
    <AboutUs5 />
    <FullTestimonials showHead />
    <Blogs2 />
    <SContactForm noLine />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - Freelancer Dark'
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