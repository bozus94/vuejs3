<template>
	<ChildComponent ref="percentageComponent"></ChildComponent>
	<button @click.prevent="bankAccount">Agregar cuenta bancaria</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChildComponent from "@/components/ChildComponent.vue";
const percentageComponent = ref(null);
const bankAccount = () => {
	percentageComponent.value.recalculate();
};
/* export default defineComponent({ option api
	components: {
		ChildComponent,
	},
	methods: {
		bankAccount() {
			alert("Cuenta Bancaria agregada.");
			this.$refs.percentageComponent.recalculate();
		},
	},
}); */
</script>
