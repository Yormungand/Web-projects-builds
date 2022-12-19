<template>
  <div>
    <Navbar ref="navbar" />
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
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - Project Details Dark'
    };
  },
  data() {
    return {
      ProjectDate,
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