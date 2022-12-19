<template>
  <div>
    <div
      id="navi"
      :class="`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`"
    >
      <div class="container-fluid">
        <div class="logo">
          <NuxtLink to="#0">
            <img v-if="theme === 'light'" src="/img/logo-dark.png" alt="logo" />
            <img v-else src="/img/logo-light.png" alt="logo" />
          </NuxtLink>
        </div>
        <div class="menu-icon">
          <span class="icon">
            <i></i>
            <i></i>
          </span>
          <span class="text" data-splitting>
            <span class="menu-text">Menu</span>
          </span>
        </div>
      </div>
    </div>

    <div class="hamenu">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-8">
            <div class="menu-links">
              <ul class="main-menu">
                <li>
                  <div class="o-hidden">
                    <span class="link dmenu">
                      <span class="nm">01.</span>Home
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                  <div class="sub-menu">
                    <ul>
                      <li>
                        <div class="o-hidden">
                          <span class="sub-link back">
                            <i class="pe-7s-angle-left"></i> Go Back
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home1-dark">
                            <span class="nm">01.</span>Main Home
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home2-dark">
                            <span class="nm">02.</span>Creative Agency
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home5-dark">
                            <span class="nm">03.</span>Digital Agency
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home4-dark">
                            <span class="nm">04.</span>Business One Page
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home3-dark">
                            <span class="nm">05.</span>Corporate
                          </NuxtLink>
                        </div>
                      </li>

                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home6-dark">
                            <span class="nm">06.</span>Modern Agency
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home7-dark">
                            <span class="nm">07.</span>Freelancer
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/homepage/home8-dark">
                            <span class="nm">08.</span>Architecture
                          </NuxtLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="o-hidden">
                    <NuxtLink class="link" to="/about/about-dark">
                      <span class="nm">02.</span>About Us
                    </NuxtLink>
                  </div>
                </li>
                <li>
                  <div class="o-hidden">
                    <span class="link dmenu">
                      <span class="nm">03.</span>Works
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                  <div class="sub-menu">
                    <ul>
                      <li>
                        <div class="o-hidden">
                          <span class="sub-link back">
                            <i class="pe-7s-angle-left"></i> Go Back
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/showcase/showcase-dark"
                          >
                            <span class="nm">01.</span>ShowCase Parallax
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/showcase3/showcase3-dark"
                          >
                            <span class="nm">02.</span>ShowCase Carousel
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/showcase2/showcase2-dark"
                          >
                            <span class="nm">03.</span>ShowCase Circle
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/works/works-dark">
                            <span class="nm">04.</span>Portfolio Masonry
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/works2/works2-dark">
                            <span class="nm">05.</span>Portfolio Filtering
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/works3/works3-dark">
                            <span class="nm">06.</span>Portfolio Gallery
                          </NuxtLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="o-hidden">
                    <span class="link dmenu">
                      <span class="nm">04.</span>Blogs
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                  <div class="sub-menu">
                    <ul>
                      <li>
                        <div class="o-hidden">
                          <span class="sub-link back">
                            <i class="pe-7s-angle-left"></i> Go Back
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink class="sub-link" to="/blog/blog-dark">
                            <span class="nm">01.</span>Blog Standerd
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/blog-list/blog-list-dark"
                          >
                            <span class="nm">02.</span>Blog List
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/blog-grid/blog-grid-dark"
                          >
                            <span class="nm">03.</span>Blog Grid
                          </NuxtLink>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLink
                            class="sub-link"
                            to="/blog-details/blog-details-dark"
                          >
                            <span class="nm">04.</span>Blog Details
                          </NuxtLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="o-hidden">
                    <NuxtLink class="link" to="/contact/contact-dark">
                      <span class="nm">05.</span>Contact
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="cont-info">
              <div class="item">
                <h6>Phone :</h6>
                <p>+03 762-2367-723</p>
              </div>
              <div class="item">
                <h6>Address :</h6>
                <p>541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io</p>
              </div>
              <div class="item">
                <h6>Email :</h6>
                <p>
                  <a href="#0">Vie_website@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initFullNavbarMenu from "../../common/initFullNavbarMenu";
export default {
  props: ["theme"],
  mounted() {
    initFullNavbarMenu();
  },
};
</script>

<style scoped>
</style>