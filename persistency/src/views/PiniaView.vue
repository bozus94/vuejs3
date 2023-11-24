<template>
	<MainLayout>
		<div class="mt-12 mx-auto w-3/6">
			<div class="flex justify-center">
				<input
					type="text"
					v-model="todo"
					id="small-input"
					placeholder="Todo"
					@keyup.enter="saveTodo"
					class="block w-11/12 p-2 text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<button
					@click="saveTodo"
					type="button"
					class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-r-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Guardar
				</button>
			</div>
			<div
				v-if="store.todos.length > 0"
				class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<div
					v-for="(todo, index) in store.todos"
					:key="index"
					class="flex justify-between items-center text-white bg-gray-500 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-600 px-4 py-2 border-b border-gray-200 rounded-b-md"
				>
					<p class="block w-10/12">
						{{ todo }}
					</p>
					<div class="w-2/12 flex items-center justify-around">
						<button @click="deleteTodo(index)" class="hover:bg-gray-800 p-2">X</button>
						<button @click="EditTodo(index)" class="hover:bg-gray-800 p-2">edit</button>
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
					No Hay Tareas
				</p>
			</div>
		</div>
	</MainLayout>
</template>

<script lang="ts">
import { useTodosStore } from "@/store/useTodo";
import { defineComponent, ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue"; // @ is an alias to /src

export default defineComponent({
	name: "HomeView",
	setup() {
		const store = useTodosStore();
		const todo = ref("");
		const editing = ref(false);
		const index_edit = ref(0);
		const deleteTodo = (index: number) => {
			console.log(index);
			store.todos.splice(index, 1);
			alert(`Tarea ${index} eliminada`);
		};

		const EditTodo = (index: number) => {
			editing.value = true;
			const edit_todo = store.todos.slice(index)[0];
			todo.value = edit_todo;
			index_edit.value = index;
		};

		const saveTodo = () => {
			if (todo.value === "") {
				return false;
			}
			if (editing.value === true) {
				store.todos.splice(index_edit.value, 1, todo.value);
				editing.value = false;
				alert(`Tarea ${index_edit.value} actualizada`);
				index_edit.value = 0;
			} else {
				store.todos.push(todo.value);
				alert(`Tarea creada`);
			}
			todo.value = "";
		};

		return { store, todo, saveTodo, deleteTodo, EditTodo };
	},
	/* mounted() {
		console.log(this.store.todos);
	}, */
	components: {
		MainLayout,
	},
});
</script>
