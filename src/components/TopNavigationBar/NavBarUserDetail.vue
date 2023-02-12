<template>
  <span class="text-center">
    <span class="text-dsba">{{ role }}</span>
    <span class="text-disable"> | </span>
    <span class="text-it"> {{ name }}</span>
    <span class="text-disable"> | </span>
  </span>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    }
};
</script>
