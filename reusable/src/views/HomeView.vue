<template>
	<TailwindView>
		<template #titleHeader>Home</template>
		<div class="home">
			<img alt="Vue logo" src="../assets/logo.png" />
			<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		</div>
	</TailwindView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TailwindView from "./layouts/TailwindView.vue";
export default defineComponent({
	name: "HomeView",
	components: {
		HelloWorld,
		TailwindView,
	},
});
</script>
