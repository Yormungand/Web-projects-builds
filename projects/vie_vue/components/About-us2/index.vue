<template>
  <div class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="img-mons sm-mb30">
            <div class="row">
              <div class="col-md-5 cmd-padding valign">
                <div class="img1 wow imago" data-wow-delay=".5s">
                  <img :src="AboutUs2Data.image1" alt="" />
                </div>
              </div>
              <div class="col-md-7 cmd-padding">
                <div class="img2 wow imago" data-wow-delay=".3s">
                  <img :src="AboutUs2Data.image2" alt="" />
                </div>
                <div class="img3 wow imago" data-wow-delay=".8s">
                  <img :src="AboutUs2Data.image3" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="content">
            <div class="sub-title">
              <h6>{{ AboutUs2Data.smallTitle }}</h6>
            </div>
            <h3 class="words chars splitting main-title wow" data-splitting>
              {{ AboutUs2Data.title.first }} <br />
              {{ AboutUs2Data.title.second }}
            </h3>
            <p class="words chars splitting wow txt" data-splitting>
              {{ AboutUs2Data.content }}
            </p>
            <div class="ftbox mt-30">
              <ul>
                <li
                  v-for="feature in AboutUs2Data.features"
                  :key="feature.id"
                  :class="`wow fadeIn ${feature.id == 2 ? 'space' : ''}`"
                  :data-wow-delay="feature.wowDelay"
                >
                  <span
                    :class="`icon
                    color-font
                    pe-7s-${feature.icon}`"
                  ></span>
                  <h6>
                    {{ feature.name.first }} <br />
                    {{ feature.name.second }}
                  </h6>
                  <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutUs2Data from "../../data/about-us2.json";
export default {
  data() {
    return {
      AboutUs2Data,
    };
  },
};
</script>

<style scoped>
</style>