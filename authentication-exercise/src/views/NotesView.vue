<template>
	<div class="mx-auto">
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" v-if="notes.length > 0">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">#</th>
						<th scope="col" class="px-6 py-3">Note</th>
						<th scope="col" class="px-6 py-3">
							<router-link
								:to="{ name: 'newnote' }"
								type="button"
								class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								+ Add Note
							</router-link>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="note in notes" :key="note.id">
						<td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/12">{{ note.id }}</td>
						<td class="px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white w-9/12">
							{{ note.content }}
						</td>
						<td class="px-6 py-4 w-2/12">
							<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
			<div
				class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
				role="alert"
				v-else
			>
				<span class="font-medium">No records</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import useAuth from "@/store/auth";
import { Ref, onMounted, ref } from "vue";
import INote from "@/interfaces/INote";

const store = useAuth();
const notes: Ref<Array<INote>> = ref([]);

onMounted(async () => {
	notes.value = await store.getNotes();
});
</script>
