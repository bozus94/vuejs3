import { createApolloProvider } from "@vue/apollo-option";
import { createApp, h } from "vue";
import App from "./App.vue";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = createHttpLink({
	uri: "http://localhost:4000/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
});

const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
});

createApp({ render: () => h(App) })
	.use(apolloProvider)
	.mount("#app");
