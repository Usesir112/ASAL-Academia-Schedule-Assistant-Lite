<template>
  <div class="">
    <div class="flex justify-between">
      <!-- Header Topic -->
      <div>
        <div class="kanit-600-36" :class="colorText">
          <p>
            {{ page }}
          </p>
        </div>
        <div class="text-disable kanit-600-16">
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Header Topic -->

      <!-- Header Search -->

      <!-- Subject Search -->
      <div class="flex items-center" :class="colorText">
        <div class="relative drop-shadow mx-2">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-3 pl-10 text-sm rounded-lg bg-white focus:outline-none focus:shadow-xl duration-300"
            :placeholder="`ค้นหา${page}`"
          />
        </div>
        <!-- Subject Search -->

        <!-- Course Search -->
        <div></div>
        <!-- Course Search -->

        <div></div>

        <!-- Add Table Button -->
        <div class="ml-3">
          <NuxtLink to="/" :class="`btn-sol-${color}`">
            <span class="mr-3"> เพิ่ม{{ page }} </span>
            <font-awesome-icon icon="fa-solid fa-plus" />
          </NuxtLink>
        </div>
        <!-- Add Table Button -->
      </div>
      <!-- Header Search -->
    </div>

    <!-- Header Tag -->
    <div class="flex items-center mt-3">
      <HeaderTag :text="`it`" :bg="`bg-it`" :color="`text-it`" />
      <HeaderTag :text="`dsba`" :bg="`bg-dsba`" :color="`text-dsba`" />
      <HeaderTag :text="`bit`" :bg="`bg-bit`" :color="`text-bit`" />
      <HeaderTag :text="`ai`" :bg="`bg-ai`" :color="`text-ai`" />
    </div>
    <!-- Header Tag -->
  </div>
</template>
<script>
export default {
  props: {
    page: {},
    description: {},
    color: {},
    colorText: {},
  },
};
</script>
<style lang="sass">
@import "@/sass/_typography"
@import "@/sass/_component.sass"
</style>
