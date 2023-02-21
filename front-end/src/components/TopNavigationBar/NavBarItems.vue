<template>
  <NuxtLink class="ml-4 flex items-center inline-flex" :to="path">
    <span v-html="svgSelector(text)"></span>
    <span class="ml-2">{{ text }}</span>
  </NuxtLink>
</template>
<script>
import { svgSelector } from './ts/svgSelector';
export default {
  props: {
    text: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  methods: {
    svgSelector,
  },
};
</script>
