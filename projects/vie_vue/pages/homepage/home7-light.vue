<template>
  <div>
    <Navbar ref="navbar" theme="light" />
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
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Freelancer Light'
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