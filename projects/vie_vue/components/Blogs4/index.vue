<template>
  <section class="blog-crv sub-bg">
    <div class="stories">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 no-padding">
            <swiper
              class="swiper-wrapper swiper-container swiper-img"
              ref="myImageSwiper"
              :options="swiperImageOptions"
              @ready="handleSwiperReadied"
            >
              <swiper-slide class="swiper-slide">
                <div class="item wow fadeIn" data-wow-delay=".3s">
                  <div class="img">
                    <img class="thumparallax" src="/img/blog/1.jpg" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="item wow fadeIn" data-wow-delay=".3s">
                  <div class="img">
                    <img class="thumparallax" src="/img/blog/2.jpg" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="item wow fadeIn" data-wow-delay=".3s">
                  <div class="img">
                    <img class="thumparallax" src="/img/blog/3.jpg" alt="" />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-lg-6 no-padding valign">
            <swiper
              class="swiper-wrapper swiper-container swiper-content"
              :options="swiperTextOptions"
            >
              <swiper-slide class="swiper-slide">
                <div class="item wow fadeIn" data-wow-delay=".6s">
                  <div class="content">
                    <div class="tags">
                      <NuxtLink to="#0">Trending</NuxtLink>
                    </div>
                    <div class="info">
                      <NuxtLink to="#0">
                        <i class="far fa-clock"></i>
                        06 Aug 2022
                      </NuxtLink>
                      <NuxtLink to="#0">by Alex Morgan</NuxtLink>
                    </div>
                    <div class="title">
                      <h4>
                        <NuxtLink to="#0">
                          Create The Lifestyle You Really Desire This World
                        </NuxtLink>
                      </h4>
                    </div>
                    <div class="text">
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                    </div>
                    <div class="more">
                      <NuxtLink to="/blog-details/blog-details-dark">
                        Read More
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item wow fadeIn" data-wow-delay=".6s">
                  <div class="content">
                    <div class="tags">
                      <NuxtLink to="#0">Trending</NuxtLink>
                    </div>
                    <div class="info">
                      <NuxtLink to="#0">
                        <i class="far fa-clock"></i>
                        06 Aug 2022
                      </NuxtLink>
                      <NuxtLink to="#0">by Alex Morgan</NuxtLink>
                    </div>
                    <div class="title">
                      <h4>
                        <NuxtLink to="#0">
                          List of The Best Investment Projects
                        </NuxtLink>
                      </h4>
                    </div>
                    <div class="text">
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                    </div>
                    <div class="more">
                      <NuxtLink to="/blog-details/blog-details-dark">
                        Read More
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item wow fadeIn" data-wow-delay=".6s">
                  <div class="content">
                    <div class="tags">
                      <NuxtLink to="#0">Trending</NuxtLink>
                    </div>
                    <div class="info">
                      <NuxtLink to="#0">
                        <i class="far fa-clock"></i>
                        06 Aug 2022
                      </NuxtLink>
                      <NuxtLink to="#0">by Alex Morgan</NuxtLink>
                    </div>
                    <div class="title">
                      <h4>
                        <NuxtLink to="#0">
                          World Best Business Website Company</NuxtLink
                        >
                      </h4>
                    </div>
                    <div class="text">
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                    </div>
                    <div class="more">
                      <NuxtLink to="/blog-details/blog-details-dark">
                        Read More
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="controls">
          <div
            ref="navigationNextRef"
            class="swiper-button-next swiper-nav-ctrl next-ctrl"
          >
            <i class="fas fa-caret-up"></i>
          </div>
          <div
            ref="navigationPrevRef"
            class="swiper-button-prev swiper-nav-ctrl prev-ctrl"
          >
            <i class="fas fa-caret-down"></i>
          </div>
          <div class="swiper-pagination" ref="paginationRef"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import removeSlashFromBagination from '../../common/removeSlashpagination';
import thumparallax from '../../common/thumparallax';
export default {
  data() {
    return {
      swiperImageOptions: {
        speed: 800,
        effect: "fade",
        spaceBetween: 0,
        loop: true,
        parallax: true,
        slidesPerView: 1,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination",
        },
      },
      swiperTextOptions: {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          prevEl: ".controls .swiper-button-prev",
          nextEl: ".controls .swiper-button-next",
        },
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".controls .swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.myImageSwiper.$swiper;
    },
  },
  methods: {
    handleSwiperReadied: (swiper) => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          let img = swiper.slides[i].childNodes[0].childNodes[0].childNodes[0]
          img.setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      });
    },
  },
  mounted() {
    removeSlashFromBagination()
    thumparallax()
  },
};
</script>

<style scoped>
</style>