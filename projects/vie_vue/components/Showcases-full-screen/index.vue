<template>
  <header :ref="sliderRef" class="slider showcase-full">
    <div class="swiper-container parallax-slider">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="slide in showcasse1Data"
          :key="slide.id"
          class="swiper-slide"
        >
          <div
            class="bg-img valign"
            :style="`background-image: url(${slide.image})`"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="caption">
                    <h1>
                      <NuxtLink to="/project-details2/project-details2-dark">
                        <div class="stroke" data-swiper-parallax="-2000">
                          {{ slide.title.first }}
                        </div>
                        <span data-swiper-parallax="-5000">
                          {{ slide.title.second }}
                        </span>
                      </NuxtLink>
                      <div class="bord"></div>
                    </h1>
                    <div class="discover">
                      <NuxtLink to="/project-details2/project-details2-dark">
                        <span>
                          Explore <br />
                          More
                        </span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import showcasse1Data from "../../data/showcase1.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
export default {
  props: ["sliderRef"],
  data() {
    return {
      showcasse1Data,
      swiperOptions: {
        speed: 1000,
        slidesPerView: 1,
        mousewheel: true,
        parallax: true,
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
  },
};
</script>

<style scoped>
</style>