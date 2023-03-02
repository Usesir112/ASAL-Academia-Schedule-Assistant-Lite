<template>
  <div class="flex flex-col mx-2">
    <label>{{ label }}</label>
    <input type="text" :value="value" class="shadow rounded-lg py-2 px-5 mt-2 transition-all duration-300 focus:shadow-lg focus:outline-none cursor-pointer focus:cursor-text disabled:text-disable-100 disabled:cursor-not-allowed" 
    :disabled="disabled"/>
  </div>
</template>
<script lang="ts">
export default {
    props: {
        label: {},
        value: {},
        disabled:{type: Boolean},
    }
}
</script>
