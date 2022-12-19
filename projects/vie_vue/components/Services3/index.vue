<template>
  <section class="feat sub-bg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Best Services</h6>
            <h3 class="wow color-font">
              We help to create strategies, design &amp; development.
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 items md-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-monitor"></i>
            </span>
            <h5>Interface Design</h5>
            <p>
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items active md-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-bolt-outline"></i>
            </span>
            <h5>Creative Always</h5>
            <p>
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items sm-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-cube"></i>
            </span>
            <h5>Real-time Editing</h5>
            <p>
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-color-wand"></i>
            </span>
            <h5>Art Concept</h5>
            <p>
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardMouseEffect from "../../common/cardMouseEffect";
export default {
  mounted() {
    cardMouseEffect();
  },
};
</script>

<style scoped>
</style>