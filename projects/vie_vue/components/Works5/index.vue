<template>
  <section class="portfolio-frl section-padding pb-70">
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
    <div class="container">
      <div class="row">
        <div class="filtering col-12">
          <div class="filter wow fadeIn" data-wow-delay=".5s">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".brand">Branding</span>
            <span data-filter=".web">Mobile App</span>
            <span data-filter=".graphic">Creative</span>
          </div>
        </div>

        <div class="gallery full-width">
          <div
            class="col-md-6 items graphic lg-mr wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/2.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/3.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div
            class="col-md-6 items web graphic wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/5.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Creative Mobile App</h6>
                <p>Ui / Ux creative mobile app design</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/6.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="#0">App</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Fitnes</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="#0">Creative</NuxtLink>
                </span>
              </div>
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
  mounted() {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  },
};
</script>

<style scoped>
</style>