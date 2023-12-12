import { createApp, provide, h } from "vue";
import App from "./App.vue";
import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
	uri: "http://localhost:4000/graphql",
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: "ws://localhost:4000/graphql",
		on: {
			connected: () => console.log("connected client"),
			closed: () => console.log("closed"),
		},
	})
);

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === "OperationDefinition" && definition.operation === "subscription";
	},
	wsLink,
	httpLink
);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: link,
	cache,
});
createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
}).mount("#app");
