<template>
	<router-view />
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>
<style lang="scss"></style>
