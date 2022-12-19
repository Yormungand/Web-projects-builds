<template>
  <section class="agency section-padding position-re">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="imgsec md-mb50">
            <div class="row">
              <div class="col-md-6">
                <div class="item">
                  <div
                    class="imgone big-bord wow fadeInDown"
                    data-wow-delay=".8s"
                  >
                    <img
                      class="thumparallax-down"
                      :src="AboutUs3data.image1"
                      alt=""
                    />
                  </div>
                  <div class="exp">
                    <h2 class="nmb-font">{{ AboutUs3data.exp.nmb }}</h2>
                    <h6>{{ AboutUs3data.exp.name }}</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <div
                    class="imgtwo big-bord wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <img
                      class="thumparallax"
                      :src="AboutUs3data.image2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 valign">
          <div class="content">
            <h4 class="wow words chars splitting" data-splitting>
              {{ AboutUs3data.title.first }} <br />
              {{ AboutUs3data.title.second }}
            </h4>
            <p class="wow txt words chars splitting" data-splitting>
              {{ AboutUs3data.content.first }} <br />
              {{ AboutUs3data.content.second }}
            </p>
            <NuxtLink
              to="/about/about-dark"
              class="butn bord curve mt-40 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <span>{{ AboutUs3data.smallTitle }}</span>
            </NuxtLink>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="line bottom right"></div>
  </section>
</template>

<script>
import AboutUs3data from "../../data/about-us3.json";
import thumparallax from "../../common/thumparallax";
import thumparallaxDown from "../../common/thumparallaxDown";
export default {
  data() {
    return {
      AboutUs3data,
    };
  },
  mounted() {
    thumparallax();
    thumparallaxDown();
  },
};
</script>

<style scoped>
</style>