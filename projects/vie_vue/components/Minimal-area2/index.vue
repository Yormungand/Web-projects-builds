<template>
  <section class="min-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <img class="thumparallax-down" src="/img/min-area.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content">
            <h4 class="color-font">Dream. Innovate. Implement.</h4>
            <p class="wow txt words chars splitting" data-splitting>
              Our creative Ad agency is ranked among the finest in the US. We
              cultivate smart ideas for start-ups and seasoned players. By
              adhering to industry standards, we create some stunning
              portfolios. Company branding redefines.
            </p>
            <ul>
              <li class="wow fadeInUp" data-wow-delay=".2s">
                We provide free initial consultation and support.
              </li>
              <li class="wow fadeInUp" data-wow-delay=".4s">
                We work with some of the most successful businesses.
              </li>
            </ul>
            <NuxtLink
              to="/about/about-dark"
              class="butn bord curve mt-40 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <span>Discover</span>
            </NuxtLink>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import thumparallaxDown from "../../common/thumparallaxDown";
export default {
  mounted() {
    thumparallaxDown();
  },
};
</script>

<style scoped>
</style>