<template>
	<div>
		<h1>counter</h1>
		<p>{{ counter }} x 2 = {{ time2 }}</p>
		<button @click="increment">incrementar</button>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

const store = useStore();
const counter = computed(() => store.state.counter);
const time2 = computed(() => store.getters.time2);
const increment = () => store.commit("setCounter", counter.value + 1);

/* composition api
export default defineComponent({
	name: "VuexView",
	setup() {
		const store = useStore();
		const counter = computed(() => store.state.counter);
		const time2 = computed(() => store.getters.time2);
		const increment = () => store.commit("setCounter", counter.value + 1);

		return { counter, time2, increment };
	},
});
 */
/* option api
import { defineComponent } from "vue";
import { mapState, mapMutations, mapGetters } from "vuex";
export default defineComponent({
	name: "VuexVie",
	computed: {
		...mapState(["counter"]),
		...mapGetters(["time2"]),
	},
	methods: {
		...mapMutations(["setCounter"]),
		increment() {
			this.setCounter(this.counter + 1);
		},
	},
}); */
</script>

<style scoped></style>
