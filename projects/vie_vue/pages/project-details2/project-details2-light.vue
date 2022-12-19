<template>
  <div>
    <Navbar ref="navbar" lr="logoRef" />
    <div class="wrapper">
      <ProjectDetails2Header :projectHeaderData="ProjectDate" />
      <ProjectIntroduction :projectIntroductionData="ProjectDate.intro" />
      <ProjectGallery :projectGalleryData="ProjectDate.gallery" />
      <ProjectDescription :projectDescriptionData="ProjectDate.description" />
      <ProjectVideo :projectVideoData="ProjectDate" />
      <NextProject />
      <Footer />
    </div>
  </div>
</template>

<script>
import ProjectDate from "../../data/project-details2.json";

export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Project Details Light'
    };
  },
  data() {
    return {
      ProjectDate,
    };
  },
  mounted() {
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