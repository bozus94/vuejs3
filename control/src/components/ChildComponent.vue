<template>
	<h2>{{ msg }}</h2>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref, defineExpose, onMounted } from "vue";
const percentage = ref(0);

const recalculate = () => {
	percentage.value = getRndInteger(percentage.value, 101);
};

const msg = computed(() => {
	return percentage.value !== 100 ? `Progreso actual: ${percentage.value}%` : "Tarea Completada";
});

const getRndInteger = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

defineExpose({ recalculate });

onMounted(() => {
	percentage.value = Math.floor(Math.random() * 100);
});

/* export default defineComponent({ option api
	data() {
		return {
			percentage: 0,
		};
	},
	methods: {
		recalculate() {
			this.percentage = this.getRndInteger(this.percentage, 100);
		},
		getRndInteger(min: number, max: number) {
			return Math.floor(Math.random() * (max - min)) + min;
		},
	},
	mounted() {
		this.percentage = 24;
	},
}); */
</script>
