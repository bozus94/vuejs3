<template>
	<MainLayout>
		<div class="mt-12 mx-auto w-3/6">
			<div class="flex justify-center">
				<input
					type="text"
					v-model="user.name.value"
					id="small-input"
					placeholder="Name"
					class="w-5/12 p-2 text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<input
					type="text"
					v-model="user.lastname.value"
					id="small-input"
					placeholder="Lastname"
					class="w-5/12 p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<button
					@click="saveUser"
					type="button"
					class="w-2/12 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-r-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Guardar
				</button>
			</div>
			<div
				v-if="users.length > 0"
				class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<div
					v-for="(user, index) in users"
					:key="index"
					class="flex justify-between items-center text-white bg-gray-500 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-600 px-4 py-2 border-b border-gray-200 rounded-b-md"
				>
					<p class="block w-10/12">
						{{ `${capitalize(user.name)}  ${capitalize(user.lastname)}` }}
					</p>
					<div class="w-2/12 flex items-center justify-around">
						<button @click="deleteUser(index)" class="hover:bg-gray-800 p-2">X</button>
						<button @click="editUser(index)" class="hover:bg-gray-800 p-2">edit</button>
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
					No Hay Usuarios
				</p>
			</div>
		</div>
	</MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onUpdated } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { computed } from "@vue/reactivity";
// @ is an alias to /src
interface IUser {
	name: string;
	lastname: string;
}
export default defineComponent({
	name: "HomeView",
	setup() {
		const users: Ref<Array<IUser>> = ref([]);
		const user = { name: ref(""), lastname: ref("") };
		const editing = ref(false);
		const index_edit = ref(0);

		const editUser = (index: number) => {
			editing.value = true;
			const edit_user: IUser = users.value.slice(index)[0];
			console.log(edit_user);
			user.name.value = edit_user.name;
			user.lastname.value = edit_user.lastname;
			index_edit.value = index;
		};

		const saveUser = () => {
			if (user.name.value === "" && user.lastname.value) {
				return false;
			}
			if (editing.value === true) {
				const editUser = { name: user.name.value, lastname: user.lastname.value };
				users.value.splice(index_edit.value, 1, editUser);
				editing.value = false;
				set_userls(users.value);
				alert(`user ${index_edit.value} updated`);
				index_edit.value = 0;
			} else {
				const newUser = { name: user.name.value, lastname: user.lastname.value };
				users.value.push(newUser);
				localStorage.setItem("users", JSON.stringify(users.value));
				alert(`User created`);
			}
			user.name.value = "";
			user.lastname.value = "";
		};

		const deleteUser = (index: number) => {
			console.log(index);
			users.value.splice(index, 1);
			set_userls(users.value);
			alert(`user ${index} deleted`);
		};

		const get_usersls = () => {
			const users_ls = localStorage.getItem("users");
			if (users_ls !== null) {
				return JSON.parse(users_ls);
			}
			return [];
		};

		const set_userls = (data: any) => {
			localStorage.setItem("users", JSON.stringify(data));
		};

		onMounted(() => {
			console.log(get_usersls());
			users.value = get_usersls();
		});

		onUpdated(() => {
			console.log(get_usersls());
			users.value = get_usersls();
		});

		const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

		return { users, user, saveUser, deleteUser, editUser, capitalize };
	},
	components: {
		MainLayout,
	},
});
</script>
