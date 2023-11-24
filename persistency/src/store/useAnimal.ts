import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
	state: () => {
		return {
			todos: [""],
		};
	},
	actions: {
		addTodo(todo: string) {
			this.todos.push(todo);
		},
		/* 	deleteTodo(index: number) {
			
		}, */
	},
	persist: true,
});
