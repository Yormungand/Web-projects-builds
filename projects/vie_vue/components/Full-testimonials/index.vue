<template>
  <section
    :class="`testimonials ${
      withIMG
        ? 'section-padding bg-img'
        : withCOLOR
        ? 'section-padding back-color'
        : noPadding
        ? ''
        : 'section-padding'
    } ${classText ? classText : ''}`"
    :style="`background-image: ${withIMG ? 'url(' + withIMG + ')' : 'none'}`"
  >
    <div v-if="showHead" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Testimonials</h6>
            <h3 class="wow color-font">
              We love our clients from all over the world.
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid position-re">
      <div class="row wow fadeInUp" data-wow-delay=".5s">
        <div class="col-lg-12">
          <VueSlickCarousel
            ref="carousel"
            v-bind="settings"
            class="slic-item"
            data-wow-delay=".5s"
          >
            <div class="item">
              <div class="info valign">
                <div class="cont">
                  <div class="author">
                    <div class="img">
                      <img src="/img/clients/1.jpg" alt="" />
                    </div>
                    <h6 class="author-name color-font">Alex Regelman</h6>
                    <span class="author-details"> Co-founder, Colabrio </span>
                  </div>
                </div>
              </div>
              <p>
                I would highly recommend Vie Digital. I worked with the team on
                an animation for our ‘Click &amp; Collect’ service.
              </p>
            </div>
            <div class="item">
              <div class="info valign">
                <div class="cont">
                  <div class="author">
                    <div class="img">
                      <img src="/img/clients/1.jpg" alt="" />
                    </div>
                    <h6 class="author-name color-font">Alex Regelman</h6>
                    <span class="author-details"> Co-founder, Colabrio </span>
                  </div>
                </div>
              </div>
              <p>
                I would highly recommend Vie Digital. I worked with the team on
                an animation for our ‘Click &amp; Collect’ service.
              </p>
            </div>
            <div class="item">
              <div class="info valign">
                <div class="cont">
                  <div class="author">
                    <div class="img">
                      <img src="/img/clients/1.jpg" alt="" />
                    </div>
                    <h6 class="author-name color-font">Alex Regelman</h6>
                    <span class="author-details"> Co-founder, Colabrio </span>
                  </div>
                </div>
              </div>
              <p>
                I would highly recommend Vie Digital. I worked with the team on
                an animation for our ‘Click &amp; Collect’ service.
              </p>
            </div>
            <div class="item">
              <div class="info valign">
                <div class="cont">
                  <div class="author">
                    <div class="img">
                      <img src="/img/clients/1.jpg" alt="" />
                    </div>
                    <h6 class="author-name color-font">Alex Regelman</h6>
                    <span class="author-details"> Co-founder, Colabrio </span>
                  </div>
                </div>
              </div>
              <p>
                I would highly recommend Vie Digital. I worked with the team on
                an animation for our ‘Click &amp; Collect’ service.
              </p>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="arrows">
        <div class="container">
          <div @click="showNext" class="next cursor-pointer">
            <span class="pe-7s-angle-right"></span>
          </div>
          <div @click="showPrev" class="prev cursor-pointer">
            <span class="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["withIMG", "withCOLOR", "noPadding", "classText", "showHead"],
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        rows: 1,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  mounted() {
    document.querySelector('.slick-track').classList.remove('slick-center')
  }
};
</script>

<style scoped>
</style>