<template>
  <section class="intro-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="htit">
            <h4><span>02 </span> Description</h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-1 col-md-8">
          <div class="text js-scroll__content">
            <p class="extra-text">{{ projectDescriptionData.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projectDescriptionData"],
};
</script>

<style scoped>
</style>