/* import { createStore } from "vuex";
const uri = "http://vue-server.test/api";
export default createStore({
	state: {
		token: null,
		notes: [],
	},
	getters: {},
	mutations: {},
	actions: {
		async register(state, name: string, email: string, password: string) {
			const rawResult = await fetch(`${uri}/register`, {
				method: "POST",
				headers: {
					"content-type": "Application/json",
					accept: "Application/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
			});
			const result = rawResult.json();
			if (result.status === false) {
				return false;
			} else {
				state.token = result.token;
				return true;
			}
			console.log(result);
		},
		async login(state, email: string, password: string) {
			const rawResult = await fetch(`${uri}/login`, {
				method: "POST",
				headers: {
					"content-type": "Application/json",
					accept: "Application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			const result = rawResult.json();
			console.log(result);
		},
		async GetNotes() {
			const rawResult = await fetch(`${uri}/note`, {
				method: "GET",
				headers: {
					"content-type": "Application/json",
					accept: "Application/json",
				},
			});
			const result = rawResult.json();
			console.log(result);
		},
		async addNote(content: string) {
			const rawResult = await fetch(`${uri}/note`, {
				method: "POST",
				headers: {
					"content-type": "Application/json",
					accept: "Application/json",
				},
				body: JSON.stringify({
					content: content,
				}),
			});
			const result = rawResult.json();
			console.log(result);
		},
	},
	modules: {},
});
 */
