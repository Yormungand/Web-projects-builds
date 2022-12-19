<template>
  <section class="projdtal">
    <div class="popup-img">
      <div class="row">
        <NuxtLink
          to="#0"
          v-for="(imageLink, index) in projectGalleryData"
          :key="index"
          :class="`col-md-${
            index + 1 === projectGalleryData.length ? '12' : '3'
          } popimg`"
        >
          <img alt="" :src="imageLink" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projectGalleryData"],
};
</script>

<style scoped>
</style>