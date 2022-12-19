<template>
  <section class="case-study">
    <div
      id="content-carousel-container-unq-1"
      class="swiper-container"
      data-swiper="container"
    >
      <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
        <swiper-slide
          v-for="slide in caseStudyData"
          :key="slide.id"
          class="swiper-slide bg-img"
          :style="`background-image: url(${slide.image}) `"
          data-overlay-dark="7"
        >
          <div class="container d-flex align-items-end">
            <div class="cont">
              <NuxtLink to="#">
                <span>Case Study</span>
                <h6 class="main-color">{{ slide.date }}</h6>
                <h4>{{ slide.title }}</h4>
              </NuxtLink>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="controls">
        <div
          ref="navigationNextRef"
          class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <i class="fas fa-chevron-right"></i>
        </div>
        <div
          ref="navigationPrevRef"
          class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import caseStudyData from "../../data/case-study.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
export default {
  props: ["sliderRef"],
  data() {
    return {
      caseStudyData,
      swiperOptions: {
        speed: 1000,
        effect: "fade",
        navigation: {
          prevEl: ".controls .swiper-button-prev",
          nextEl: ".controls .swiper-button-next",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  },
};
</script>

<style scoped>
</style>