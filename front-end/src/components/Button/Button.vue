<template>
  <button class="rounded inline-flex items-center" :class="buttonConfig()">


    <span>{{ text }}</span>
  </button>
</template>
<script setup>
const { text, color, type } = defineProps(["text", "color", "type"]);

function buttonConfig() {
  console.log(color, type);
}
</script>
