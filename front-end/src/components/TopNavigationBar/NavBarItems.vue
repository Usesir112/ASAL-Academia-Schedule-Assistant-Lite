<template>
  <NuxtLink class="ml-4 flex items-center inline-flex" :to="path">
    <span><font-awesome-icon :icon="['fas', icon]" /></span>
    <span class="ml-2">{{ text }}</span>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
    path: {
      type: String,
    },
    icon: {
      type: String,
    }
  },
};
</script>
