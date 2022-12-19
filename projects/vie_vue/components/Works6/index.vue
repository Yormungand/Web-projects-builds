<template>
  <section class="portfolio po-arch section-padding pb-70" id="works">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h2 class="wow fadeIn" data-wow-delay=".3s">Projects</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="filtering col-12">
          <div class="filter custom-font wow fadeIn" data-wow-delay=".5s">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".brand">Interior</span>
            <span data-filter=".web">Architecture</span>
            <span data-filter=".graphic">Residential</span>
          </div>
        </div>

        <div class="gallery full-width">
          <div
            class="col-md-6 items graphic lg-mr wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>BUGANVILLA HOUSE</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/2.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>The Concept</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/5.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>Private House</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>

          <div
            class="col-md-6 items web graphic wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/3.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>Floating House Messinia</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>

          <div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>IN THE PINE FOREST</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>

          <div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/arch/work/6.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h5>VILLAS IN SOCHI</h5>
              <span class="tags main-color custom-font">
                <NuxtLink to="#0">Arch</NuxtLink>,
                <NuxtLink to="#0">Interior</NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from '../../common/initIsotope';
export default {
    mounted() {
        initIsotope()
    }
};
</script>

<style scoped>
</style>