// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],

  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],

  css: ["~/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
});
