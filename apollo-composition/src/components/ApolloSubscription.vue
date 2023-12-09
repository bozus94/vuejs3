<template>
	<div class="w-50">
		<h1>Subscriptions</h1>
		<ul>
			<li v-for="(sub, index) in subs" :key="index">
				<strong>New Comment</strong>: <br />
				<strong>Name</strong>: {{ sub.name }} <br />
				<strong>comment</strong>: {{ sub.text }}
				<hr />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from "vue";
import { useSubscription } from "@vue/apollo-composable";
import gql from "graphql-tag";
import IComment from "@/interfaces/Comment";

export default defineComponent({
	name: "App",
	setup() {
		const subs: Ref<Array<IComment>> = ref([]);
		const { onResult, result } = useSubscription(gql`
			subscription {
				commentCreated {
					name
					text
				}
			}
		`);

		/* onResult((data) => {
			console.log(data.data.commentCreated);
			subs.value.push(data.data.commentCreated);
		}); */

		watch(result, (data) => {
			subs.value.push(data.commentCreated);
		});

		return { subs };
	},
});
</script>

<style scoped>
.w-50 {
	width: 50%;
}
</style>
