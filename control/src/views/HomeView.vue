<template>
	<ParentComponent></ParentComponent>
</template>

<script lang="ts">
import ParentComponent from "@/components/ParentComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ParentComponent,
	},
});
</script>
