<template>
  <div>
    <div class="circle-bg">
      <div class="circle-color fixed">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
    <header
      class="works-header particles valign bg-img parallaxie"
      data-overlay-dark="4"
      :style="{
        backgroundImage: `url(/demo-img/bg.png)`,
        minHeight: '100vh',
        zIndex: '99999',
      }"
    >
      <Particles id="particles-js" :options="particlesOption" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-11 static">
            <div class="capt mt-50">
              <div class="bactxt custom-font valign">
                <span class="full-width" style="color: transparent"> vie </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="main-content section-padding pb-0">
      <section class="masonery section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head text-center">
                <h3 class="color-font">16+ stunning unique home pages</h3>
                <span class="tbg"> <b>+</b>30 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home1-dark">
                    <div class="img">
                      <img src="/demo-img/1.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Main Demo</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home1-light">
                    <div class="img">
                      <img src="/demo-img/01.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Main Demo</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home2-dark">
                    <div class="img">
                      <img src="/demo-img/2.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Creative Agency</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home2-light">
                    <div class="img">
                      <img src="/demo-img/02.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Creative Agency</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home7-dark">
                    <div class="img">
                      <img src="/demo-img/n2.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Freelancer</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home7-light">
                    <div class="img">
                      <img src="/demo-img/n02.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Freelancer</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home8-dark">
                    <div class="img">
                      <img src="/demo-img/n3.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Architecture</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home8-light">
                    <div class="img">
                      <img src="/demo-img/n03.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Architecture</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home5-dark">
                    <div class="img">
                      <img src="/demo-img/3.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Digital Agency</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home5-light">
                    <div class="img">
                      <img src="/demo-img/03.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Digital Agency</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home4-dark">
                    <div class="img">
                      <img src="/demo-img/4.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Business One Page</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home4-light">
                    <div class="img">
                      <img src="/demo-img/04.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Business One Page</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home3-dark">
                    <div class="img">
                      <img src="/demo-img/5.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Corporate Business</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home3-light">
                    <div class="img">
                      <img src="/demo-img/05.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Corporate Business</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home6-dark">
                    <div class="img">
                      <img src="/demo-img/n1.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Modern Agency</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/homepage/home6-light">
                    <div class="img">
                      <img src="/demo-img/n01.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Modern Agency</h6>
                      <div class="sta new">
                        <span>New Demo</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/about/about-dark">
                    <div class="img">
                      <img src="/demo-img/about.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>About Us</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/about/about-light">
                    <div class="img">
                      <img src="/demo-img/about1.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>About Us</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <div class="img">
                    <img src="/demo-img/c1.png" alt="image" />
                  </div>
                  <div class="cont">
                    <h6>Interior Demo</h6>
                    <div class="sta coming">
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <div class="img">
                    <img src="/demo-img/c2.png" alt="image" />
                  </div>
                  <div class="cont">
                    <h6>Mobile App</h6>
                    <div class="sta coming">
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <div class="img">
                    <img src="/demo-img/c3.png" alt="image" />
                  </div>
                  <div class="cont">
                    <h6>Restaurant</h6>
                    <div class="sta coming">
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <div class="img">
                    <img src="/demo-img/c4.png" alt="image" />
                  </div>
                  <div class="cont">
                    <h6>Multipurpose</h6>
                    <div class="sta coming">
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="masonery section-padding position-re">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head text-center">
                <h3 class="color-font">Showcases</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="gallery full-width">
              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase/showcase-dark">
                    <div class="img">
                      <img src="/demo-img/s1.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Full Screen</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase/showcase-light">
                    <div class="img">
                      <img src="/demo-img/s01.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Full Screen</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase3/showcase3-dark">
                    <div class="img">
                      <img src="/demo-img/s2.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Showcase Carousel</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase3/showcase3-light">
                    <div class="img">
                      <img src="/demo-img/s02.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Showcase Carousel</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase2/showcase2-dark">
                    <div class="img">
                      <img src="/demo-img/s3.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Showcase Circle</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/showcase2/showcase2-light">
                    <div class="img">
                      <img src="/demo-img/s03.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Showcase Circle</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works/works-dark">
                    <div class="img">
                      <img src="/demo-img/w1.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works 3 column</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works/works-light">
                    <div class="img">
                      <img src="/demo-img/w01.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works 3 column</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works2/works2-dark">
                    <div class="img">
                      <img src="/demo-img/w2.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works Filtering</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works2/works2-light">
                    <div class="img">
                      <img src="/demo-img/w02.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works Filtering</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works3/works3-dark">
                    <div class="img">
                      <img src="/demo-img/w3.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works Gallery</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 items">
                <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <NuxtLink target="_blank" to="/works3/works3-light">
                    <div class="img">
                      <img src="/demo-img/w03.png" alt="image" />
                    </div>
                    <div class="cont">
                      <h6>Works Gallery</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="line top left"></div>
      </section>

      <section class="services bords lficon section-padding position-re">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="sec-head text-center">
                <h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
                <h3 class="wow color-font">
                  Creative Agency, Corporate and Portfolio Template
                </h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
              <div class="item-box">
                <div>
                  <span class="icon pe-7s-paint-bucket"></span>
                </div>
                <div class="cont">
                  <h6>UI/UX Design</h6>
                  <p>
                    We provide the best design by following the latest trends.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
              <div class="item-box">
                <div>
                  <span class="icon pe-7s-phone"></span>
                </div>
                <div class="cont">
                  <h6>Easily Customizable</h6>
                  <p>Build and customize stunning pages in minutes.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
              <div class="item-box">
                <div>
                  <span class="icon pe-7s-display1"></span>
                </div>
                <div class="cont">
                  <h6>One / Multi Page</h6>
                  <p>Choose the layout style that fits your need.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
              <div class="item-box">
                <div>
                  <span class="icon pe-7s-diskette"></span>
                </div>
                <div class="cont">
                  <h6>24/7 Support</h6>
                  <p>We commit to keep your site up-to-date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line top right"></div>
      </section>

      <section
        class="call-action section-padding bg-img"
        :style="{ backgroundImage: `url(/img/patrn.svg)` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-9">
              <div class="content sm-mb30">
                <h6 class="wow words chars splitting" data-splitting>
                  Purchase The Vie
                </h6>
                <h2 class="wow words chars splitting" data-splitting>
                  and Make <br />
                  <b class="back-color">Your Life Easier</b>.
                </h2>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 valign">
              <NuxtLink
                to="#"
                class="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Purchase Now</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import particlesConfig from "../config/particle-config";
import initIsotope from "../common/initIsotope";
export default {
  name: "demos",
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Demos",
    };
  },
  data() {
    return {
      particlesOption: particlesConfig,
    };
  },
  mounted() {
    setTimeout(() => {
      initIsotope();
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 1000);
  },
};
</script>

<style scoped>
.sec-head h3 {
  font-size: 60px;
  font-weight: 700;
  position: relative;
}

.sec-head .tbg {
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  font-size: 15vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(180deg, #fff 0%, rgba(17, 18, 21, 0.2) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.1;
}

.sec-head .tbg b {
  font-weight: 500;
  font-size: 12vw;
}

.main-content {
  position: relative;
  z-index: 999999;
  background: transparent;
}

.masonery .gallery .items {
  margin-top: 30px;
}

.masonery .container-fluid {
  padding: 0 100px;
}

.masonery .item-img {
  padding: 5px 15px 20px;
  border-radius: 10px;
  background: #18191d;
  position: relative;
}

.masonery .item-img .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.masonery .item-img .img {
  border-radius: 10px;
  overflow: hidden;
}

.masonery .item-img .img img {
  transition: all 0.4s;
}

.masonery .item-img .img:hover img {
  transform: scale(1.1);
}

.masonery .item-img .cont {
  margin-top: 20px;
  text-align: center;
  position: relative;
}

.masonery .item-img .cont h6 {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
}

.masonery .item-img .cont .sta {
  position: absolute;
  top: -47px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 30px;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.05);
  font-size: 12px;
}

.masonery .item-img .cont .sta.coming {
  background: #03be5f;
}

.masonery .item-img .cont .sta.new {
  background: #ff4b4b;
}
</style>