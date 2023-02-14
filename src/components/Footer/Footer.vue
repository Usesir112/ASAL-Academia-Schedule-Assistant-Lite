<template>
  <footer class="bg-white border border-it">
    <div class="flex justify-between items-center p-5 flex-row">
      <!-- Left side -->
      <div class="flex items-center basis-1/2">

        <!-- Logo Image -->
        <div>
          <img class="w-20" src="@/assets/images/asap-logo.svg" alt="logo" />
        </div>

        <!-- Application Name -->
        <div class="ml-5">
          <p class="kanit-500 text-it">
            Academia Schedule Assistant Pro
            <span class="kanit-400 text-disable">v.0.1.0</span>
          </p>
          <p class="text-disable">
            COPYRIGHT © 2023 P. YENAURA RIGHTS RESERVED
          </p>
        </div>
      </div>
      <!-- Left side -->

      <!-- Right Side -->
      <div class="flex items-center">
        <!-- Contact -->
          <FooterContact
            v-for="contact in contacts"
            :key="contact.name"
            :link="contact.link"
            :icon="contact.icon"
            :color="contact.color"
          />
      </div> <!-- Right Side -->
    </div>
  </footer>
</template>
<script>
import contacts from "./json/contact.json";
export default {
  data() {
    return {
      contacts,
    };
  },
};
</script>
<style lang="sass">
@import "@/sass/_typography"
</style>
