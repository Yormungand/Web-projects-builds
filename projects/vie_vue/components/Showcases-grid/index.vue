<template>
  <header :ref="sliderRef" class="slider showcase-grid">
    <div id="content-carousel-container-unq-1">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="slide in fullScreenData"
          :key="slide.id"
          class="swiper-slide"
        >
          <div class="nbo-link">
            <NuxtLink to="/project-details2/project-details2-dark">
            <div
              class="bg-img"
              :style="`background-image: url(${slide.image})`"
              :data-tooltip-tit="slide.title.first + ' ' + slide.title.second"
              :data-tooltip-sub="slide.sub"
            ></div>
          </NuxtLink>
          </div>
        </swiper-slide>
      </swiper>
      <div class="txt-botm">
        <div
          ref="navigationNextRef"
          class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref="navigationPrevRef"
          class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>

        <div class="swiper-pagination dots" ref="paginationRef"></div>
      </div>
    </div>
  </header>
</template>

<script>
import fullScreenData from "../../data/fullScreen.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import tooltipEffect from "../../common/tooltipEffect";
export default {
  props: ["sliderRef"],
  data() {
    return {
      fullScreenData,
      swiperOptions: {
        slidesPerView: 4,
        speed: 1000,
        mousewheel: true,
        autoplay: true,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        },
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next",
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
    tooltipEffect()
    removeSlashFromBagination();
  },
};
</script>

<style scoped>
</style>