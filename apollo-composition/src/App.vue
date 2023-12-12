<template>
	<h1>Apollo option</h1>
	<div>
		<input type="text" placeholder="Name" v-model.lazy="nameUser" />
		<p v-if="$apollo.queries.comments.loading">Loading ....</p>
		<ul v-else>
			<div v-if="comments.length > 0 || commentsByUser.length > 0">
				<div v-if="commentsByUser.length === 0">
					<li v-for="(el, index) in comments" :key="index">
						<strong>{{ el.name }}</strong
						>: {{ el.text }}
					</li>
				</div>
				<div v-else>
					<li v-for="(el, index) in commentsByUser" :key="index">
						<strong>{{ el.name }}</strong
						>: {{ el.text }}
					</li>
				</div>
			</div>
			<p v-else>No hay comentarios</p>
		</ul>
	</div>
	<hr />
	<div>
		<input type="text" placeholder="Name" v-model="newName" />
		<input type="text" placeholder="Text" v-model="newText" />
		<button @click.prevent="addComment">Save</button>
	</div>
	<hr />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gql from "graphql-tag";
import IComment from "./interfaces/Comment";

export default defineComponent({
	name: "AppOption",
	apollo: {
		comments: {
			query: gql`
				query {
					comments: getAllComments {
						name
						text
					}
				}
			`,
			fetchPolicy: "cache-and-network",
			pollInterval: 5000,
		},
		commentsByUser: {
			query: gql`
				query ($name: String!) {
					commentsByUser: getCommentsFromUser(name: $name) {
						name
						text
					}
				}
			`,
			fetchPolicy: "cache-and-network",
			pollInterval: 5000,
			variables() {
				return {
					name: this.nameUser,
				};
			},
		},
		/* $subscribe: {
			notifications: {
				query: gql`
					subscription {
						notifications: commentCreated {
							name
							text
						}
					}
				`,
				result({ data }) {
					this.notification.push(data.commentCreated);
				},
			},
		}, */
	},
	data() {
		return {
			comments: [] as Array<IComment>,
			commentsByUser: [] as Array<IComment>,
			nameUser: "" as string,
			newName: "" as string,
			newText: "" as string,
			notificacions: [],
		};
	},
	methods: {
		addComment() {
			const newName = this.newName;
			const newText = this.newText;

			this.$apollo.mutate({
				mutation: gql`
					mutation CreateComment($name: String!, $text: String!) {
						createComment(name: $name, text: $text)
					}
				`,
				variables: {
					name: newName,
					text: newText,
				},
				/* update: (cache, { data: { createComment } }) => {
					let data = cache.readQuery({ query: $this.apollo.queries.comments });
					data = [...data, createComment];
					cache.writeQuery({ query: $this.apollo.queries.comments, data });
				}, */
			});

			this.newName = "";
			this.newText = "";
		},
	},
	components: {},
});
</script>
