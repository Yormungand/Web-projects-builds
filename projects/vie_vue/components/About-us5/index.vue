<template>
  <section class="about-cr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 img md-mb50">
          <img src="/img/intro/4.jpg" alt="" />
        </div>
        <div class="col-lg-5 valign">
          <div class="cont full-width">
            <h3 class="color-font">UI / UX Designer</h3>
            <h5 class="co-tit mb-15">We help to create visual strategies.</h5>
            <p>
              We are Vie. We create award-winning websites, remarkable brands
              and cutting-edge apps.Nullam imperdie.
            </p>
            <div class="skills-box mt-40">
              <div class="skill-item">
                <h5 class="fz-14 mb-15">UI / UX Design</h5>
                <div class="skill-progress">
                  <div class="progres" data-value="90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <h5 class="fz-14 mb-15">Apps Development</h5>
                <div class="skill-progress">
                  <div class="progres" data-value="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutSkillsProgress from "../../common/aboutSkillsProgress";
export default {
  mounted() {
    aboutSkillsProgress();
  },
};
</script>

<style scoped>
</style>