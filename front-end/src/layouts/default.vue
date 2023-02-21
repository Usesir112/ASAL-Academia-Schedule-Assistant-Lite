import TopNavBar from '../components/TopNavigationBar/TopNavBar.vue';

<template>
  <div>
    <Head>
      <title>{{ `${$route.meta.titleThai} | ASAP` }}</title>
    </Head>
    <div>
      <!-- Top Nav Bar Here -->
      <TopNavBar />
    </div>

    <div class="mt-20 container ml-16">
      <Header
        :page="$route.meta.titleThai"
        :description="$route.meta.descriptionThai"
        :colorText="$route.meta.colorText"
        :color="$route.meta.color"
      />
      <!-- Contnet here -->
      <slot />
    </div>

    <Footer />

    <div>
      <!-- Vector Here -->
      <div class="fixed bottom-0 z-[-100]">
        <!-- Bottom-Left Vector -->
        <svg
          width="314"
          height="239"
          viewBox="0 0 314 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M143 128C101.181 50.6346 -5.7422 35.1856 -14 0V239H314C292.199 200.44 173 183.5 143 128Z"
            fill="#BFD8FF"
            id="bottom-v-left"
          />
        </svg>
      </div>

      <div class="fixed bottom-0 right-0 z-[-100]">
        <!-- Bottom-Right Vector -->
        <svg
          width="291"
          height="141"
          viewBox="0 0 291 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.5 88.5C114.374 123.467 43 173.5 0 178.5H291V0C225.333 27.6667 194.5 48 151.5 88.5Z"
            fill="#FFE3E8"
            id="bottom-v-right"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  // head(nuxtApp) {
  //   return {
  //     title: `${this.$route?.meta?.titleThai} | ASAP`,
  //   };
  // },
});
</script>

<style lang="scss">
@import "@/sass/_colors.sass";

#bottom-v-left {
  fill: $it-100;
}

#bottom-v-right {
  fill: $bit-100;
}
</style>
