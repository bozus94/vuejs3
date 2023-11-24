<template>
	<div>
		<NavBar></NavBar>
		<div class="max-w-screen-xl p-4 mx-auto">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped></style>
