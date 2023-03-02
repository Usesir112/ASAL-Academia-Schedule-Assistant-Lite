<template>
  <div class="login-card">
    <!-- Version -->
    <div class="text-right mr-3 text-disable-100">
      <p class="kanit-600-16">v.0.1.0</p>
    </div>

    <!-- Content -->
    <div class="grid justify-items-center">
      <!-- Logo Image -->
      <div>
        <img src="@/assets/images/asap-logo.svg" alt="ASAP Logo" />
      </div>

      <!-- Text line one -->
      <div class="text-disable kanit-600-24 mt-5">
        <p>Welcome to</p>
      </div>

      <!-- Text line two -->
      <div class="text-it kanit-600-24 mt-3">
        <p>Academia Schedule Assistant Pro</p>
      </div>

      <!-- Login Button -->
      <div class="mt-5">
        <NuxtLink to="/tablesView" :class="`btn-outline-it`">
          <img src="@/assets/icons/google-icon.svg" alt="Google Logo" />
          <span class="ml-5">Log in with Google</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "login-layout",
});
</script>

<style lang="sass" scoped>
@import "@/sass/login.sass"
@import "@/sass/_component.sass"
</style>
