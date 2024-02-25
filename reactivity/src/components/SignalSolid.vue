<template>
	<div>
		<h1>Signal Solid</h1>
		<h3>{{ count() }}</h3>
		<button @click="($event) => setCount((v: number) => v + 1)">Increment</button>
		<button @click="($event) => setCount((v: number) => v - 1)">Decrement</button>
		<button @click="($event) => setCount((v: number) => v = 0)">Reset</button>
	</div>
</template>
<script lang="ts" setup>
import { createSignal } from "vue-signals/solid";

const [count, setCount] = createSignal(0);
</script>
