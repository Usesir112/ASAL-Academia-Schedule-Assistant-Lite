<template>
    <NuxtLink :to="link" :class="colorSelect(color)">
        <font-awesome-icon :icon="['fab', icon]"/>
    </NuxtLink>
</template>
<script>
import {colorSelect} from "./ts/colorSelect"
export default {
    props: {
        link: {},
        icon: {},
        color: {},
    },
    methods: {
        colorSelect,
    }
};
</script>
