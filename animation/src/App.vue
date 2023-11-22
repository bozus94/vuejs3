<template>
	<div class="box">
		<button @click="showImage = !showImage">Show image</button>
		<Transition>
			<img alt="Vue logo" src="./assets/logo.png" v-if="showImage" />
		</Transition>
	</div>
	<div class="box">
		<div>
			<input type="text" v-model="note" @keyup.enter="handleNote" />
			<button @click="handleNote">Guardar</button>
			<TransitionGroup name="listNotes" tag="ul">
				<li v-for="(note, index) in notes" :key="index">{{ note }}</li>
			</TransitionGroup>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	data() {
		return {
			showImage: true,
			notes: ["nota ejemplo"],
			note: "",
		};
	},
	methods: {
		handleNote() {
			this.notes.push(this.note);
			this.note = "";
		},
	},
});
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: flex;
	margin-top: 2.5rem;
	justify-content: flex-start;
	flex-wrap: wrap;
	height: 100vh;
	width: 100%;
}

.box {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	width: 33.3%;
	& ul li {
		list-style: none;
		text-align: start;
		margin-bottom: 0.5rem;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.listNotes-enter-active,
.listNotes-leave-active {
	transition: all 0.2s ease;
}

.listNotes-enter-from,
.listNotes-leave-to {
	opacity: 0;
	transform: translateY(35px);
}
</style>
