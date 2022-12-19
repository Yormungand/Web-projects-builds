<template>
  <section
    class="video bg-img parallaxie"
    style="background-image: url(/img/bg-vid.jpg)"
  >
    <ModalVideo
      :channel="videoChannel"
      :videoId="videoId"
      :isOpen.sync="videoIsOpen"
    />
    <a class="vid valign" @click="openVideo">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </a>
    <div class="container">
      <div class="stauts">
        <div class="item">
          <h4>3<span>K</span> +</h4>
          <h6>Happy Clients</h6>
        </div>
        <div class="item">
          <h4>14<span>K</span> +</h4>
          <h6>Success Projects</h6>
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