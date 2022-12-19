<template>
  <section class="intro-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="htit">
            <h4><span>01 </span> Introduction</h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1 col-md-8">
          <div class="text js-scroll__content">
            <p class="extra-text">
              {{ projectIntroductionData.content }}
            </p>
            <ul class="smp-list mt-30">
              <li
                v-for="item in projectIntroductionData.spmList"
                :key="item.id"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projectIntroductionData"],
};
</script>

<style scoped>
</style>