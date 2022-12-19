export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vie ",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content: "Nuxtjs Vue Template vie onepage themeforest",
      },
      {
        hid: "description",
        name: "description",
        content: "vie - Onepage Multi-Purpose Vue Nuxtjs Template",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],

    script: [
      {
        src: "/js/wow.min.js",
      },
      { src: "/js/isotope.pkgd.min.js" },
      { src: "/js/pace.min.js" },
      { src: "/js/splitting.min.js" },
      { src: "/js/simpleParallax.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/particles.js",
    "~/plugins/vueAwesomeSwiper.js",
    "~/plugins/vueSlickCarousel.js",
    {
      src: "~/plugins/vueEllipseProgress.js",
      mode: "client",
    },
    {
      src: "~/plugins/vueTyper.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // target: "static",
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["vue-scrollto/nuxt", { duration: 1000 }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
    },
  },
  // buildDir: "dist",
};
