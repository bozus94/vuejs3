<template>
	<div>
		<h1>Signal Angular</h1>
		<h3>{{ count() }}</h3>
		<button @click="count.update((v: number) => v + 1)">Increment</button>
		<button @click="count.update((v: number) => v - 1)">Decrement</button>
		<button @click="count.set(0)">Reset</button>
	</div>
</template>

<script setup lang="ts">
import { signal } from "vue-signals/angular";

const count = signal(0);
</script>

<style scoped></style>
