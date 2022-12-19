<template>
  <header class="slider circle-slide showcase-carus">
    <div id="content-carousel-container-unq-1" class="swiper-container">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="slide in fullScreenData"
          :key="slide.id"
          class="swiper-slide"
        >
          <div class="full-width">
            <div
              class="bg-img valign"
              :style="`background-image: url(${slide.image})`"
              data-overlay-dark="1"
            >
              <div class="caption ontop valign">
                <div class="o-hidden">
                  <h1 data-swiper-parallax="-2000">
                    <NuxtLink to="/project-details2/project-details2-dark">
                      <div class="stroke">{{ slide.title.first }}</div>
                      <span>{{ slide.title.second }}</span>
                    </NuxtLink>
                  </h1>
                </div>
              </div>
              <div class="copy-cap valign">
                <div class="cap">
                  <h1 data-swiper-parallax="-2000">
                    <NuxtLink to="/project-details2/project-details2-dark">
                      <div class="stroke">{{ slide.title.first }}</div>
                      <span>{{ slide.title.second }}</span>
                    </NuxtLink>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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
    </div>
  </header>
</template>

<script>
import fullScreenData from "../../data/fullScreen.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
export default {
  props: ["sliderRef"],
  data() {
    return {
      fullScreenData,
      swiperOptions: {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: true,
        spaceBetween: 500,
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next",
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
          },
          640: {
            spaceBetween: 0,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 500,
          },
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