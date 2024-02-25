<template>
	<div class="container">
		<SignalSolid />
		<hr />
		<SignalAngular />
		<hr />
		<ReactiveComponent />
	</div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import SignalSolid from "./components/SignalSolid.vue";
import SignalAngular from "./components/SignalAngular.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";

export default defineComponent({
	name: "App",
	components: {
		SignalSolid,
		SignalAngular,
		ReactiveComponent,
	},
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
}
.container {
	max-width: 1000px;
	margin: 0 auto;
	padding: 15px;
	text-align: center;
}
hr {
	margin: 35px auto;
	width: 35%;
}

button {
	padding: 5px 10px;
	margin: 0 5px;
	border: 1px solid rgba(1, 11, 19, 0.5);
	border-radius: 5px;
	background-color: #bbcedd;
	color: #010b13;
	transition: all 0.25s ease-in-out;
}
button:hover {
	border: 1px solid rgba(104, 115, 126, 0.7);
	background-color: rgb(212, 224, 236);
	color: #2c2c2c;
}
</style>
