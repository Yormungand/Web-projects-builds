<template>
  <div>
    <NavbarArch ref="navbar" />
    <Intro5 />
    <AboutUs6 />
    <Services6 />
    <Works6 />
    <CaseStudy />
    <Team3 />
    <TestimonialsArcho />
    <LatestNews />
    <ContactArcho />
    <FooterArch />
  </div>
</template>

<script>
export default {
  layout: "arch-dark",
  head() {
    return {
      titleTemplate: '%s - Architecture Dark'
    };
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
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

<style>
</style>