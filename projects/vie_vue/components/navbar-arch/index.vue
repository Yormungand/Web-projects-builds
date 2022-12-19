<template>
  <nav class="navbar navbar-expand-lg" :ref="nr">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img
          ref="lr"
          src="/img/logo-dark.png"
          v-if="theme === 'light'"
          alt="logo"
        />
        <img
          ref="lr"
          src="/img/logo-light.png"
          v-else-if="theme === 'themeD'"
          alt="logo"
        />
        <img ref="lr" src="/img/logo-light.png" v-else alt="logo" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        @click="handleMobileDropdown"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-scroll-nav="0"
            >
              Home
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="homepage/home1-dark">
                Main Home
              </a>
              <a class="dropdown-item" href="homepage/home2-dark">
                Creative Agency
              </a>
              <a class="dropdown-item" href="homepage/home5-dark">
                Digital Agency
              </a>
              <a class="dropdown-item" href="homepage/home4-dark">
                Business One Page
              </a>
              <a class="dropdown-item" href="homepage/home3-dark">
                Corporate Business
              </a>
              <a class="dropdown-item" href="homepage/home6-dark">
                Modern Agency
              </a>
              <a class="dropdown-item" href="homepage/home7-dark">
                Freelancer
              </a>
              <a class="dropdown-item" href="homepage/home8-dark">
                Architecture
              </a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#about'">About </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#works'"> Works </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#team'"> Team </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#testimonials'"> Testimonials </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#blogs'"> Blog </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#contact'"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import getSiblings from "../../common/getSiblings";
export default {
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
          item.classList.remove("show");
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[2]) {
            item.childNodes[2].classList.remove("show");
          }
        });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    },
  },
};
</script>

<style scoped>
</style>