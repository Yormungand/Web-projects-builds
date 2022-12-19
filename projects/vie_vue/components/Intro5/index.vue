<template>
  <header :ref="sliderRef" id="arch-slider" class="slider arch-slider">
    <div class="swiper-container parallax-slider">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="(slide, index) in intro5Data"
          :key="slide.id"
          class="swiper-slide"
        >
          <div
            class="bg-img valign"
            :style="`background-image: url(${slide.image})`"
            data-overlay-dark="6"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="caption mt-30">
                    <h5>0{{ index + 1 }} .</h5>
                    <h1>
                      <div v-if="typeof slide.title === 'object'">
                        {{ slide.title.first }} <br />
                        {{ slide.title.second }}
                      </div>
                      <div v-else>
                        {{ slide.title }}
                      </div>
                    </h1>
                    <p v-if="slide.content">{{ slide.content }}</p>
                  </div>
                </div>
                <div class="col-lg-4 valign">
                  <div class="explore">
                    <a href="#0">
                      Explore Project
                      <i class="ion-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="setting">
        <div class="controls">
          <div
            ref="navigationNextRef"
            class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i class="ion-chevron-right"></i>
          </div>
          <div
            ref="navigationPrevRef"
            class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i class="ion-chevron-left"></i>
          </div>
        </div>
        <div ref="paginationRef" class="swiper-pagination"></div>
      </div>

    </div>
  </header>
</template>

<script>
import intro5Data from "../../data/intro5.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
export default {
  props: ["sliderRef"],
  data() {
    return {
      intro5Data,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".setting .swiper-button-prev",
          nextEl: ".setting .swiper-button-next",
        },
        parallax: true,
        pagination: {
          clickable: true,
          el: ".setting .swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    handleSwiperReadied: (swiper) => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      });
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