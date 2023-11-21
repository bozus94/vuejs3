<template>
	<ListItem :content="props.content"></ListItem>
</template>

<script setup lang="ts">
import ListItem from "@/components/ListItem.vue";
import { defineProps } from "vue";

const props = defineProps(["content"]);
</script>

<style scoped></style>
