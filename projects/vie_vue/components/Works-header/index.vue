<template>
    <header
       :ref="sliderRef"
      class="works-header fixed-slider hfixd valign sub-bg"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-9 static">
            <div class="capt mt-50">
              <div class="parlx text-center">
                <h1 class="color-font">amazing works</h1>
                <p>
                  Creativity involves breaking out of expected &amp; repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </p>
              </div>

              <div class="bactxt custom-font valign">
                <span class="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        props: ['sliderRef']
    }
</script>

<style scoped>

</style>