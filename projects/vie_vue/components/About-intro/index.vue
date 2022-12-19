<template>
  <section class="intro-section section-padding pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="htit sm-mb30">
            <h4>{{ AboutInfo1Data.title }}</h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1 col-md-8">
          <div class="text">
            <p class="wow txt mb-10 words chars splitting" data-splitting>
              {{ AboutInfo1Data.paragraph1 }}
            </p>
            <p class="wow txt words chars splitting" data-splitting>
              {{ AboutInfo1Data.paragraph2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutInfo1Data from "../../data/about-info.json";
export default {
  data() {
    return {
      AboutInfo1Data,
    };
  },
};
</script>

<style scoped>
</style>