<template>
  <section class="work-carousel metro position-re">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 no-padding">
          <div class="swiper-container">
            <Swiper
              ref="mySwiper"
              :options="swiperOptions"
              class="swiper-wrapper"
            >
              <SwiperSlide
                v-for="slide in worksData"
                :key="slide.id"
                class="swiper-slide"
              >
                <div class="content wow noraidus fadeInUp" data-wow-delay=".3s">
                  <div
                    class="item-img bg-img wow imago"
                    :style="`backgroundImage: url(${slide.image})`"
                  ></div>
                  <div class="cont">
                    <h6 class="color-font">
                      <NuxtLink to="#">{{ slide.title }}</NuxtLink>
                    </h6>
                    <h4>
                      <NuxtLink to="/project-details2/project-details2-dark">
                        {{ slide.secTex }}
                      </NuxtLink>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              ref="navigationNextRef"
              class="
                swiper-button-next swiper-nav-ctrl
                simp-next
                cursor-pointer
              "
            >
              <span class="simple-btn right">Next</span>
            </div>
            <div
              ref="navigationPrevRef"
              class="
                swiper-button-prev swiper-nav-ctrl
                simp-prev
                cursor-pointer
              "
            >
              <span class="simple-btn">Prev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import worksData from "../../data/works1.json";
export default {
  data() {
    return {
      worksData,
      swiperOptions: {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        slidesPerView: 2,
        centeredSlides: true,
        autoPlay: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          991: {
            slidesPerView: 2,
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
};
</script>

<style scoped>
</style>