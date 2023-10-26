<template>
	<div>
		<h1>{{ store.count }} x 2 = {{ store.time2 }}</h1>
		<button @click="store.increment(1)">Increment</button>
	</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/useCounterStore";

const store = useCounterStore();
</script>
