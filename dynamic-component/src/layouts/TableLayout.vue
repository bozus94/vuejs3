<template>
	<div class="w-full">
		<TableItem :content="props.content"></TableItem>
	</div>
</template>

<script setup lang="ts">
import TableItem from "@/components/TableItem.vue";
import { defineProps } from "vue";

const props = defineProps(["content"]);
</script>

<style scoped></style>
