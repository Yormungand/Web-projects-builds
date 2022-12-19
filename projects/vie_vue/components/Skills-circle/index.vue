<template>
  <section
    :class="`skills-circle pt-50 pb-50 ${
      from ? (from === 'aboutPage' ? 'sub-bg' : '') : ''
    }`"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="">
            <div class="row">
              <div class="col-md-6">
                <div class="item wow fadeInLeft" data-wow-delay=".6">
                  <div class="skill">
                    <client-only>
                      <VueEllipseProgress
                        :progress="90"
                        :legend="true"
                        :legendValue="90"
                        :legendFormatter="
                          ({ currentValue }) => currentValue + '%'
                        "
                        color="rgb(18, 194, 233)"
                        :emptyColor="theme == 'dark' ? '#0f1013' : '#e5e5e5'"
                        :thickness="2"
                        emptyThickness="2"
                        :size="110"
                      />
                    </client-only>
                  </div>
                  <div class="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item wow fadeInLeft" data-wow-delay=".3">
                  <div class="skill">
                    <client-only>
                      <VueEllipseProgress
                        :progress="75"
                        :legend="true"
                        :legendValue="75"
                        :legendFormatter="
                          ({ currentValue }) => currentValue + '%'
                        "
                        color="rgb(18, 194, 233)"
                        :emptyColor="theme == 'dark' ? '#0f1013' : '#e5e5e5'"
                        :thickness="2"
                        emptyThickness="2"
                        :size="110"
                      />
                    </client-only>
                  </div>
                  <div class="cont">
                    <span>App</span>
                    <h6>Development</h6>
                  </div>
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
export default {
  props: ["from", "theme"],
};
</script>

<style scoped>
</style>