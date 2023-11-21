<template>
	<div class="relative overflow-x-auto">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3">Name</th>
					<th scope="col" class="px-6 py-3">Email</th>
					<th scope="col" class="px-6 py-3">BirthDate</th>
					<th scope="col" class="px-6 py-3">Phone</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
					v-for="user in props.content"
					:key="user.id"
				>
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						{{ user.name }}
					</th>
					<td class="px-6 py-4">{{ user.email }}</td>
					<td class="px-6 py-4">{{ user.birthDate }}</td>
					<td class="px-6 py-4">{{ user.phone }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>
