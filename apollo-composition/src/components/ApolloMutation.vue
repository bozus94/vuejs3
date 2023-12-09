<template>
	<div>
		<h1>Mutation</h1>
		<input type="text" name="name" placeholder="Name" v-model="name" />
		<input type="text" name="text" placeholder="text" v-model="text" />
		<button @click="createComment()">Create comment</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default defineComponent({
	name: "App",
	setup() {
		const name = ref("");
		const text = ref("");

		const {
			mutate: createComment,
			error: errorCreateComment,
			loading: loadingCreateComment,
			onDone: doneMutation,
		} = useMutation(
			gql`
				mutation Mutation($name: String!, $text: String!) {
					createComment(name: $name, text: $text)
				}
			`,
			() => ({
				variables: {
					name: name.value.trim(),
					text: text.value.trim(),
				},
			})
		);

		doneMutation(() => {
			alert("comment created");
			(name.value = ""), (text.value = "");
		});

		return { createComment, errorCreateComment, loadingCreateComment, name, text };
	},
});
</script>

<style></style>
