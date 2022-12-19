<template>
  <div class="team-crv section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="content wow fadeInUp md-mb30" data-wow-delay=".5s">
            <div class="sub-title">
              <h6>Our Staff</h6>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3 class="co-tit mb-15">We help to create visual strategies.</h3>
            <p>
              We are Vie. We create award-winning websites, remarkable brands
              and cutting-edge apps.Nullam imperdie.
            </p>
            <div class="skills-box mt-40">
              <div
                v-for="skill in teamData.skills"
                class="skill-item"
                :key="skill.id"
              >
                <h6 class="custom-font">{{ skill.text }}</h6>
                <div class="skill-progress">
                  <div class="progres" :data-value="skill.value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="img-box">
            <div class="row">
              <div class="col-sm-6 toright">
                <div class="full-width">
                  <div
                    v-for="(team, index) in teamData.teams.slice(0, 2)"
                    :key="team.id"
                  >
                    <div
                      :class="`img sizxl ${
                        index + 1 != teamData.teams.slice(0, 2).length
                          ? 'mb-30'
                          : null
                      }`"
                      :data-tooltip-tit="team.title"
                      :data-tooltip-sub="team.sub"
                    >
                      <img :src="team.image" alt="" class="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 toleft valign">
                <div class="full-width text-left">
                  <div
                    v-for="(team, index) in teamData.teams.slice(2, 4)"
                    :key="team.id"
                  >
                    <div
                      :class="`img sizxl ${
                        index + 1 != teamData.teams.slice(2, 4).length
                          ? 'mb-30'
                          : null
                      }`"
                      :data-tooltip-tit="team.title"
                      :data-tooltip-sub="team.sub"
                    >
                      <img
                        :src="team.image"
                        alt="team image"
                        class="imago wow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamSkillsProgress from "../../common/teamSkillsProgress";
import teamTooltip from "../../common/tooltipEffect";
import teamData from "../../data/team.json";
export default {
  data() {
    return {
      teamData,
    };
  },
  mounted() {
    teamTooltip();
    teamSkillsProgress();
  },
};
</script>

<style scoped>
</style>