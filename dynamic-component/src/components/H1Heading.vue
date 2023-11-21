<template>
	<div>
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white">{{ props.title }}</h1>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["title"]);
</script>

<style scoped></style>
