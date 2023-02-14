<template>
    <div class="mr-3 kanit-600-16" :class="color">
        <span class="mr-3 text-transparent rounded-xl pointer-events-none px-5" :class="bg">box</span>
        <span class="uppercase">{{text}}</span>
      </div>
</template>
<script>
export default {
    props: {
        text: {},
        bg: {},
        color: {},
    }
}
</script>