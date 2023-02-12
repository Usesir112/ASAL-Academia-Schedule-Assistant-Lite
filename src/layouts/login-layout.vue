<template>
  <div>
    <!-- Top Vertor and Logo -->
    <div>

      <!-- IT KMITL Logo  -->
      <div class="absolute mt-3 ml-3">
        <img
          src="../assets/images/it-logo.png"
          alt="IT-KMITL-LOGO"
          class="w-1/6"
        />
      </div>

      <!-- Vector Top Right -->
      <div class="absolute right-0">
        <svg
          width="291"
          height="178"
          viewBox="0 0 291 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.5 89.5C114.374 54.5329 43 4.5 0 -0.5H291V178C225.333 150.333 194.5 130 151.5 89.5Z"
            fill="#FFE3E8" id="top-right"
          />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="flex h-screen">
        <div class="m-auto">
            <slot />
        </div>
    </div>

    <!-- Vertor Bottom Left -->
    <div class="absolute bottom-0">
      <svg
        width="314"
        height="239"
        viewBox="0 0 314 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M143 128C101.181 50.6346 -5.7422 35.1856 -14 0V239H314C292.199 200.44 173 183.5 143 128Z"
          fill="#BFD8FF" id="bottom-left"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/sass/_colors.sass";

#bottom-left {
  fill: $it-100;
}

#top-right{
  fill: $bit-100
}
</style>
