<template>
	<div class="min-h-full">
		<NavBar></NavBar>
		<header class="bg-white shadow">
			<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">
					<slot name="titleHeader"></slot>
				</h1>
			</div>
		</header>
		<main>
			<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<slot></slot>
			</div>
		</main>
		<FooterBasic></FooterBasic>
	</div>
</template>
<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import FooterBasic from "@/components/FooterBasic.vue";
</script>
