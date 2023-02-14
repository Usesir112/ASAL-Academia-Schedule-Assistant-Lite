<template>
  <nav class="bg-white w-full fixed z-20 top-0 left-0 drop-shadow-lg py-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center flex-1">
        <!-- KMITL Logo Image -->
        <div class="w-1/6 ml-3">
          <NuxtLink to="/">
            <img src="@/assets/images/it-logo.png" alt="IT logo" />
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="ml-6">
          <NavBarItems
            v-for="item in items"
            :key="item.text"
            :text="item.text"
            :path="item.path"
            :class="[
              item.path === $route.path
                ? `active-${item.color}`
                : `not-active-${item.color}`,
            ]"
          />
        </div>
      </div>

      <!-- User Information -->
      <div class="mr-3 kanit-600-16">
        <NavBarUserDetail :name="users[0].name" :role="users[0].role" />
        <NuxtLink to="/" class="text-bit hover:underline">
          <span> ออกจากระบบ </span>
          <span 
            ><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket"
          /></span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
import items from "./json/NavBarItems.json";
import users from "~~/src/components/TopNavigationBar/json/users.json";
import NavBarItems from "./NavBarItems.vue";
import NavBarUserDetail from "./NavBarUserDetail.vue";
export default {
  components: { NavBarItems, NavBarUserDetail },
  data() {
    return {
      items,
      users,
    };
  },
};
</script>
<style lang="sass">
@import @/sass/TopNavBar
</style>
