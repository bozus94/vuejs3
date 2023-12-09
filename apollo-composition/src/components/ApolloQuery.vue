<template>
	<div>
		<h1>Query</h1>

		<input type="text" name="name" id="name" v-model.lazy="name" />
		<p v-if="error !== null">{{ error.message }}</p>
		<p v-if="loading === true">Loading....</p>
		<div v-else>
			<ul v-if="result.getCommentsFromUser.length > 0">
				<li v-for="(comment, index) in result.getCommentsFromUser" :key="index">
					<span v-if="comment">
						<strong> {{ comment.name }} </strong>: {{ comment.text }}
					</span>
				</li>
				<!-- <li v-for="(comment, index) in result.getAllComments" :key="index">
      <strong>{{ comment.name }}</strong
        >: {{ comment.text }}
      </li> -->
			</ul>
			<p v-else>No hay comentarios</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default defineComponent({
	name: "App",
	setup() {
		const name = ref("");
		/* 
      const { result, loading, error } = useQuery(gql`
        query {
          getAllComments {
            name
            text
          }
        }
      `); 
    */
		const { result, loading, error, refetch, onResult, onError } = useQuery(
			gql`
				query ($name: String!) {
					getCommentsFromUser(name: $name) {
						name
						text
					}
				}
			`,
			() => ({
				name: name.value,
			}),
			{
				fetchPolicy: "cache-and-network",
				pollInterval: 5000,
			}
		);

		onResult((result) => {
			console.log("consulta realizada Correctamente", result.data);
		});
		onError((error) => {
			console.log("Ha ocurrido un error", error.message);
		});
		return { result, loading, error, refetch, name };
	},
});
</script>

<style></style>
