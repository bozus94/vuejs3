<template>
	<div class="container mx-auto px-4 h-full">
		<div id="content" class="my-6">
			<router-view />
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>

<style lang="scss">
.router-link-exact-active {
	@apply text-blue-700;
}
</style>
