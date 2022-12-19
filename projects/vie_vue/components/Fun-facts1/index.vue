<template>
  <section class="number-sec section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">FUN FACTS</h6>
            <h3 class="wow color-font">
              Pleasure in the job puts perfection in the work.
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in funFactData" :key="item.id" class="col-md-4">
          <div class="item no-bord sm-mb50">
            <span :class="`icon ${item.icon}`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="Number(item.value)"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
                <p class="wow txt words chars splitting" data-splitting>
                    {{ item.content }}
                </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
import funFactData from "../../data/fun-fact.json";
export default {
  components: { countTo },
  data() {
    return {
      funFactData,
      counted: false,
    };
  },
  methods: {
    startCounter() {
      this.$refs.countUpRef.map((item) => item.start());
      this.counted = true;
    },
  },
  mounted() {
    let funFactsSection = document.querySelector(".number-sec");
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