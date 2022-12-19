<template>
  <section>
    <div class="container-fluid">
      <div
        class="video-wrapper section-padding bg-img parallaxie valign"
        :style="`
            background-image: url(${projectVideoData.projectHeaderImage})`"
        data-overlay-dark="4"
      >
        <div class="full-width text-center">
          <ModalVideo
            :channel="videoChannel"
            :videoId="videoId"
            :isOpen.sync="videoIsOpen"
          />
          <a @click="openVideo" class="vid">
            <div class="vid-butn">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ["projectVideoData"],
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