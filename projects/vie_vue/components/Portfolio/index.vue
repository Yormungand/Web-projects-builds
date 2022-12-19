<template>
  <section class="portfolio section-padding pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
            <h3 class="wow color-font">
              Our Recent Web Design &amp; <br />
              Some Past Projects.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div :class="`${grid == 3 ? 'container-fluid' : 'container'}`">
      <div class="row">
        <div
          :class="`filtering ${
            filterPosition === 'center'
              ? 'text-center'
              : filterPosition === 'left'
              ? 'text-left'
              : 'text-right'
          } col-12`"
        >
          <div class="filter">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".brand">Branding</span>
            <span data-filter=".web">Mobile App</span>
            <span data-filter=".graphic">Creative</span>
          </div>
        </div>

        <div class="gallery full-width">
          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6 lg-mr'
                : 'col-12'
            } items graphic wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Creativity Demand</h6>
              <span>
                <NuxtLink to="#0">Design</NuxtLink>,
                <NuxtLink to="#0">WordPress</NuxtLink>
              </span>
            </div>
          </div>

          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6'
                : 'col-12'
            } items web wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Through The Breaking</h6>
              <span>
                <NuxtLink to="#0">Design</NuxtLink>,
                <NuxtLink to="#0">WordPress</NuxtLink>
              </span>
            </div>
          </div>

          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6'
                : 'col-12'
            } items brand wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Create With Creatives</h6>
              <span>
                <NuxtLink to="#0">Design</NuxtLink>,
                <NuxtLink to="#0">WordPress</NuxtLink>
              </span>
            </div>
          </div>

          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6'
                : 'col-12'
            } items graphic wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Energies of Love</h6>
              <span>
                <NuxtLink to="#">Design</NuxtLink>,
                <NuxtLink to="#">WordPress</NuxtLink>
              </span>
            </div>
          </div>

          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6'
                : 'col-12'
            } items web wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>See It Yourself</h6>
              <span>
                <NuxtLink to="#0">Design</NuxtLink>,
                <NuxtLink to="#0">WordPress</NuxtLink>
              </span>
            </div>
          </div>

          <div
            :class="`${
              grid == 3
                ? 'col-lg-4 col-md-6'
                : grid == 2
                ? 'col-md-6'
                : 'col-12'
            } items brand wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Blast From The Past</h6>
              <span>
                <NuxtLink to="#0">Design</NuxtLink>,
                <NuxtLink to="#0">WordPress</NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
export default {
  props: ["grid", "filterPosition"],
  mounted() {
    setTimeout(() => {
        initIsotope();
    }, 1000)
  },
};
</script>

<style scoped>
</style>