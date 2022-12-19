<template>
  <section :class="`page-header ${classText && classText}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-9">
          <div class="cont text-center">
            <h1 class="mb-10 color-font">{{ title }}</h1>
            <p>{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "paragraph", "classText"],
};
</script>

<style scoped>
</style>