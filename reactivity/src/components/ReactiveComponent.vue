<template>
	<div>
		<h1>Reactive - Vue</h1>
		<h3>{{ counter.count }}</h3>
		<button @click="counter.count++">Increment</button>
		<button @click="counter.count--">Decrement</button>
		<button @click="counter.count = 0">reset</button>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

/* 
	reactive al igual que ref se usa para propiedades reactivas
	reactive se utiliza soo para objetos, ref se utiliza para datos primitivos
	no se utiliza Ref<foo> para tipar datos sino que se usa directamente el tipo de dato <foo>
	ref actualiza todo el objeto en cambio reactive solo el dato necesario. 
*/
const counter = reactive({
	count: 0,
});
</script>

<style lang="scss" scoped></style>
