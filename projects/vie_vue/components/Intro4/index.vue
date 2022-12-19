<template>
  <header class="particles circle-bg valign">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="cont text-center">
            <h1>
              <span class="color-font">Creativity</span> is the process of
              having <span class="color-font">original ideas</span>.
            </h1>
          </div>
        </div>
      </div>
    </div>

    <Particles
      id="particles-js"
      :options="theme === 'light' ? particlesBlackConfig : particlesConfig"
    />

    <div class="gradient-circle"></div>
    <div class="gradient-circle two"></div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>
import particlesConfig from "../../config/particle-config";
import blackStarConfig from "../../config/pr-s-black";
export default {
  props: ["theme"],
  data() {
    return {
      particlesConfig,
      particlesBlackConfig: blackStarConfig,
    };
  },
  mounted() {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  },
};
</script>

<style scoped>
</style>