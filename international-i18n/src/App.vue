<template>
	<select v-model="$i18n.locale">
		<option v-for="locale in $i18n.availableLocales" :key="`locale_${locale}`" :value="locale">{{ locale }}</option>
	</select>
	<div>
		<h1>
			{{
				$t("message.hello", {
					name: name,
					surName: surName,
				})
			}}
		</h1>
		<h3>{{ $t("message.content") }}</h3>
		<h3>{{ $tc("message.products", { count: 1 }) }}</h3>
		<h3>{{ $tc("message.comments", { count: 5 }) }}</h3>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("Bryan");
const surName = ref("Ortega");
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
