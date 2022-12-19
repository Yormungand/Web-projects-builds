<template>
  <section class="min-area sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <img class="thumparallax-down" src="/img/min-area.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content pt-0">
            <h4 class="wow color-font">About us.</h4>
            <p class="wow txt" data-splitting>
              Our creative Ad agency is ranked among the finest in the US. We
              cultivate smart ideas for start-ups and seasoned players.
            </p>
            <ul class="feat">
              <li class="wow fadeInUp" data-wow-delay=".2s">
                <h6><span>1</span> Our Mission</h6>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </li>
              <li class="wow fadeInUp" data-wow-delay=".4s">
                <h6><span>2</span> Our Goals</h6>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </li>
              <li class="wow fadeInUp" data-wow-delay=".6s">
                <h6><span>3</span> Why Us?</h6>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import thumparallaxDown from '../../common/thumparallaxDown';
export default {
    mounted() {
        thumparallaxDown()
    }
};
</script>

<style scoped>
</style>