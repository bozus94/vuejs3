<template>
	<NavComponent></NavComponent>
	<div class="max-w-screen-xl flex-col flex flex-wrap items-center justify-between mx-auto p-4">
		<H1Heading title="Componente dinamico"></H1Heading>

		<div class="inline-flex rounded-md shadow-sm my-10" role="group">
			<button
				@click="ChangeLayout(CardLayout)"
				type="button"
				class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				Card
			</button>
			<button
				@click="ChangeLayout(ListLayout)"
				type="button"
				class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				List
			</button>
			<button
				@click="ChangeLayout(TableLayout)"
				type="button"
				class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				Table
			</button>
		</div>

		<component :is="Layout" :content="users"></component>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

import NavComponent from "@/components/NavComponent.vue";
import H1Heading from "@/components/H1Heading.vue";
import TableLayout from "./layouts/TableLayout.vue";
import ListLayout from "./layouts/ListLayout.vue";
import CardLayout from "./layouts/CardLayout.vue";

const Layout = ref(ListLayout);

const ChangeLayout = (cmp: any) => {
	Layout.value = cmp;
};

const users = [
	{
		id: 1,
		name: "John Doe",
		email: "johndoe@example.com",
		birthDate: "1973-01-22",
		phone: "(555) 555-1234",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "janesmith@example.com",
		birthDate: "1983-02-22",
		phone: "(555) 555-5678",
	},
	{
		id: 3,
		name: "Bob Johnson",
		email: "bobjohnson@example.com",
		birthDate: "1974-11-12",
		phone: "(555) 555-9012",
	},
	{
		id: 4,
		name: "Emily Davis",
		email: "emilydavis@example.com",
		birthDate: "1974-11-30",
		phone: "(555) 555-3456",
	},
	{
		id: 5,
		name: "William Brown",
		email: "williambrown@example.com",
		birthDate: "1974-11-22",
		phone: "(555) 555-6789",
	},
	{
		id: 6,
		name: "Laura Wilson",
		email: "laurawilson@example.com",
		birthDate: "1984-12-14",
		phone: "(555) 555-1234",
	},
	{
		id: 7,
		name: "Michael Garcia",
		email: "michaelgarcia@example.com",
		birthDate: "1984-12-14",
		phone: "(555) 555-9012",
	},
	{
		id: 8,
		name: "Stephanie Lee",
		email: "stephanielee@example.com",
		birthDate: "1983-02-13",
		phone: "(555) 555-3456",
	},
	{
		id: 9,
		name: "David Hernandez",
		email: "davidhernandez@example.com",
		birthDate: "2000-11-10",
		phone: "(555) 555-6789",
	},
	{
		id: 10,
		name: "Jessica Perez",
		email: "jessicaperez@example.com",
		birthDate: "1988-11-13",
		phone: "(555) 555-9012",
	},
	{
		id: 11,
		name: "Mark Thompson",
		email: "markthompson@example.com",
		birthDate: "1999-01-17",
		phone: "(555) 555-1234",
	},
];
// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>
