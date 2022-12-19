<template>
  <section
    :class="`portfolio-cr section-padding pb-50 ${
      classText ? classText : ''
    }`"
  >
    <div class="container">
      <div class="row">
        <div class="filtering text-center col-12">
          <div class="filter">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".brand">Branding</span>
            <span data-filter=".web">Mobile App</span>
            <span data-filter=".graphic">Creative</span>
          </div>
        </div>

        <div class="gallery-mons full-width">
          <div class="items graphic wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/cr/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont flex">
              <h6 class="color-font">Creative Design</h6>
              <span>
                <NuxtLink to="#0">Graphic</NuxtLink>
              </span>
            </div>
          </div>

          <div class="items web brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/cr/2.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont flex">
              <h6 class="color-font">Modern Design</h6>
              <span>
                <NuxtLink to="#0">Brand</NuxtLink>,
                <NuxtLink to="#0">Web</NuxtLink>
              </span>
            </div>
          </div>

          <div class="items width2 brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/cr/3.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6 class="color-font">Creative Design</h6>
              <span>
                <NuxtLink to="#0">Website</NuxtLink>
              </span>
            </div>
          </div>

          <div class="items width2 graphic wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/cr/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6 class="color-font">Modern Design</h6>
              <span>
                <NuxtLink to="#0">Graphic</NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
export default {
  props: ["classText"],
  mounted() {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  },
};
</script>

<style scoped>
</style>