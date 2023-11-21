<template>
	<div
		class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="flex items-center justify-between mb-4">
			<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Users</h5>
		</div>
		<div class="flow-root">
			<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
				<li class="py-3 sm:py-4 hover:bg-gray-100" v-for="user in props.content" :key="user.id">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<img class="w-8 h-8 rounded-full" src="https://via.placeholder.com/150/771796" alt="Neil image" />
						</div>
						<div class="flex-1 min-w-0 ms-4">
							<p class="text-sm font-medium text-gray-900 truncate dark:text-white">{{ user.name }}</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">{{ user.email }}</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">{{ user.birthDate }}</p>
						</div>
						<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
							{{ user.phone }}
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>
