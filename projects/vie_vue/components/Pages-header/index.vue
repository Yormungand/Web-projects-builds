<template>
    <header class="pages-header circle-bg valign">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="cont mt-100 mb-50 text-center">
              <h1 class="color-font fw-700">
                <slot name="title"></slot>
              </h1>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="img">
              <img :src="imageLink" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="half sub-bg">
        <div class="circle-color">
          <div class="gradient-circle"></div>
          <div class="gradient-circle two"></div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        props: ["imageLink"]
    }
</script>

<style scoped>

</style>