<template>
  <section class="services box lficon section-padding position-re">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
            <h3 class="wow color-font">
              We are a new digital product development agency
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in featuresData"
          class="col-lg-6 wow fadeInLeft"
          :data-wow-delay="
            index == 0
              ? '.5s'
              : index == 1
              ? '.7s'
              : index === 2
              ? '.9s'
              : '.5s'
          "
          :key="item.id"
        >
          <div class="item-box no-curve">
            <div>
              <span :class="`icon color-font ${item.icon}`"></span>
            </div>
            <div class="cont">
              <h6>{{ item.title }}</h6>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line bottom right"></div>
  </section>
</template>

<script>
import featuresData from "../../data/features.json";
export default {
  data() {
    return {
      featuresData,
    };
  },
};
</script>

<style scoped>
</style>