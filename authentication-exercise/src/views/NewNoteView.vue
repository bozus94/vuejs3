<template>
	<div>
		<form>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input
					v-model="content"
					type="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<button
				@click.prevent="addNote"
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
			<router-link
				:to="{ name: 'list' }"
				class="ml-1.5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>Cancel</router-link
			>
		</form>
	</div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import useAuth from "@/store/auth";
import { useRouter } from "vue-router";

const content: Ref<string> = ref("");
const store = useAuth();
const router = useRouter();
const feedback: Ref<string> = ref("");
const addNote = async () => {
	const response = await store.addNote(content.value);

	if (response === false) {
		feedback.value = "Record note error";
		return false;
	}
	router.push({ name: "list" });
};
</script>
