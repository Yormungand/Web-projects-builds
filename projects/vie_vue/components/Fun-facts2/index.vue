<template>
  <section ref="funFacts2" class="block-sec section-padding">
    <div class="container">
      <div class="number-sec">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="item md-mb50">
              <span class="icon pe-7s-smile"></span>
              <h3 class="custom-font">
                <countTo
                  ref="countUpRef1"
                  :startVal="0"
                  :endVal="2400"
                  :duration="3000"
                  :autoplay="false"
                >
                  <span class="count">&nbsp;</span>
                </countTo>
              </h3>
              <p class="wow words chars splitting txt" data-splitting>
                Happy Clients
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="item md-mb50">
              <span class="icon pe-7s-portfolio"></span>
              <h3 class="custom-font">
                <countTo
                  ref="countUpRef2"
                  :startVal="0"
                  :endVal="133"
                  :duration="3000"
                  :autoplay="false"
                >
                  <span class="count">&nbsp;</span>
                </countTo>
              </h3>
              <p class="wow txt words chars splitting" data-splitting>
                Compleate Projects
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="item sm-mb50">
              <span class="icon pe-7s-cloud-download"></span>
              <h3 class="custom-font">
                <countTo
                  ref="countUpRef3"
                  :startVal="0"
                  :endVal="254"
                  :duration="3000"
                  :autoplay="false"
                >
                  <span class="count">&nbsp;</span>
                </countTo>
                k
              </h3>
              <p class="wow txt words chars splitting" data-splitting>
                Files Downloaded
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="item">
              <span class="icon pe-7s-medal"></span>
              <h3 class="custom-font">
                <countTo
                  ref="countUpRef4"
                  :startVal="0"
                  :endVal="46"
                  :duration="3000"
                  :autoplay="false"
                >
                  <span class="count">&nbsp;</span>
                </countTo>
              </h3>
              <p class="wow txt words chars splitting" data-splitting>
                Award Win
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return { counted: false };
  },
  methods: {
    startCounter() {
      this.$refs.countUpRef1.start();
      this.$refs.countUpRef2.start();
      this.$refs.countUpRef3.start();
      this.$refs.countUpRef4.start();
      this.counted = true;
    },
  },
  mounted() {
    let funFactsSection = this.$refs.funFacts2;
    window.addEventListener("scroll", () => {
      if (funFactsSection && !this.counted) {
        if (window.pageYOffset > funFactsSection.offsetTop - 200) {
          this.startCounter();
        }
      }
    });
  },
};
</script>

<style scoped>
</style>