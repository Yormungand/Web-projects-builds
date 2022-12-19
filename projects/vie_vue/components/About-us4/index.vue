<template>
  <section class="about-cr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 img md-mb50">
          <img src="/img/intro/4.jpg" alt="" />
        </div>
        <div class="col-lg-4 valign">
          <div class="cont full-width">
            <h3 class="color-font">Huge collection.</h3>
            <h6>
              Innovative solutions <br />
              to boost your creative projects.
            </h6>
            <ModalVideo
              :channel="videoChannel"
              :videoId="videoId"
              :isOpen.sync="videoIsOpen"
            />
            <div class="vid-area">
              <div class="vid-icon">
                <a class="vid" @click="openVideo">
                  <div class="vid-butn back-color">
                    <span class="icon">
                      <i class="fas fa-play"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div class="valign">
                <span class="text">Watch Video</span>
              </div>
            </div>
            <div class="states">
              <h2 class="color-font fw-700">
                125 <span class="fz-30">k</span>
              </h2>
              <p>Projects completed around the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoIsOpen: false,
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    },
  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    },
  },
};
</script>

<style scoped>
</style>