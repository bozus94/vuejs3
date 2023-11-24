<template>
	<MainLayout>
		<div class="mt-12 mx-auto w-3/6">
			<div class="flex justify-center">
				<input
					type="text"
					v-model="animal"
					id="small-input"
					placeholder="Tiger?"
					@keyup.enter="saveAnimal"
					class="block w-11/12 p-2 text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<button
					@click="saveAnimal"
					type="button"
					class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-r-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Guardar
				</button>
			</div>
			<div
				v-if="animals.length > 0"
				class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<div
					v-for="(animal, index) in animals"
					:key="index"
					class="flex justify-between items-center text-white bg-gray-500 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-600 px-4 py-2 border-b border-gray-200 rounded-b-md"
				>
					<p class="block w-10/12">
						{{ animal }}
					</p>
					<div class="w-2/12 flex items-center justify-around">
						<button @click="deleteAnimal(index)" class="hover:bg-gray-800 p-2">X</button>
						<button @click="EditAnimal(index)" class="hover:bg-gray-800 p-2">edit</button>
					</div>
				</div>
			</div>
			<div
				v-else
				class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<p
					class="block w-full px-4 py-2 text-white bg-gray-500 hover:bg-gray-700 border-b border-gray-200 rounded-b-md cursor-pointer dark:bg-gray-800 dark:border-gray-600"
				>
					No Hay Animales
				</p>
			</div>
		</div>
	</MainLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from "vue";
import MainLayout from "@/layouts/MainLayout.vue"; // @ is an alias to /src

export default defineComponent({
	name: "HomeView",
	setup() {
		const animals: Ref<Array<string>> = ref([]);
		const animal = ref("");
		const editing = ref(false);
		const index_edit = ref(0);

		const deleteAnimal = (index: number) => {
			console.log(index);
			animals.value.splice(index, 1);
			alert(`Animal ${index} eliminada`);
		};

		const EditAnimal = (index: number) => {
			editing.value = true;
			const edit_todo = animals.value.slice(index)[0];
			animal.value = edit_todo;
			index_edit.value = index;
		};

		const saveAnimal = () => {
			if (animal.value === "") {
				return false;
			}
			if (editing.value === true) {
				animals.value.splice(index_edit.value, 1, animal.value);
				editing.value = false;
				alert(`Animal ${index_edit.value} actualizada`);
				index_edit.value = 0;
			} else {
				animals.value.push(animal.value);
				alert(`Animal creada`);
			}
			animal.value = "";
		};

		const get_animalsls = () => {
			const animals_ls = localStorage.getItem("animals");
			if (animals_ls !== null) {
				return JSON.parse(animals_ls);
			}
			return [];
		};

		const set_animalsls = (data: any) => {
			localStorage.setItem("animals", JSON.stringify(data));
			console.log(get_animalsls());
		};

		onMounted(() => {
			console.log(get_animalsls());
			animals.value = get_animalsls();
		});

		watch(
			animals.value,
			(animasNew) => {
				console.log(animasNew);
				set_animalsls(animasNew);
			},
			{ deep: true }
		);

		return { animals, animal, saveAnimal, deleteAnimal, EditAnimal };
	},
	components: {
		MainLayout,
	},
});
</script>
