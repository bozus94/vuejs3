<template>
	<div>
		<form>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
				<input
					type="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="John Doe"
					required
					v-model="name"
				/>
			</div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input
					type="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@flowbite.com"
					required
					v-model="email"
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
				<input
					type="password"
					id="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="***********"
					required
					v-model="password"
				/>
			</div>

			<button
				@click.prevent="register"
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Registrar
			</button>

			<router-link
				:to="{ name: 'login' }"
				class="ml-1.5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>Login</router-link
			>

			<div v-if="feedback !== ''">
				<span class="font-medium">{{ feedback }}</span>
			</div>
		</form>
	</div>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import useAuth from "@/store/auth";
import { useRouter } from "vue-router";

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const feedback: Ref<string> = ref("");
const store = useAuth();
const router = useRouter();

const register = async () => {
	feedback.value = "sending....";
	const res = await store.register(name.value, email.value, password.value);
	if (res === false) {
		feedback.value = "An error occurred in the registration process";
		return false;
	}
	router.push({ name: "list" });
};
</script>
