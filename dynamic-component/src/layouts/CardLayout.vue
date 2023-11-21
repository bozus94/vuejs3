<template>
	<div class="grid grid-cols-4 gap-4">
		<CardItem v-for="user in props.content" :key="user.id" :content="user"> </CardItem>
	</div>
</template>

<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>

<style scoped></style>
