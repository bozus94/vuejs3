<template>
	<Authenticator>
		<template v-slot="{ user, singOut }">
			<h1>Welcome {{ user }}</h1>
			<button @click="singOut">Singout</button>
		</template>
	</Authenticator>
</template>
<script lang="ts" setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>
