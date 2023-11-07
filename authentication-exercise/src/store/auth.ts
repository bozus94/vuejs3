import { defineStore } from "pinia";
const useAuth = defineStore("auth", {
	state: () => ({
		token: "",
		notes: [],
		baseURl: "http://vue-server.test/api",
	}),
	getters: {},
	actions: {
		async register(name: string, email: string, password: string) {
			const uri = `${this.baseURl}/auth/register`;
			const rawResult = await fetch(uri, {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
			});
			const result = await rawResult.json();
			if (result.status === false) {
				return false;
			} else {
				this.token = result.token;
				return true;
			}
		},
		async login(email: string, password: string) {
			const uri = `${this.baseURl}/auth/login`;
			const rawResult = await fetch(uri, {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			const result = await rawResult.json();
			if (result.status === false) {
				return false;
			} else {
				this.token = result.token;
				return true;
			}
			console.log(result);
		},
		async getNotes() {
			const uri = `${this.baseURl}/note`;
			const rawResult = await fetch(uri, {
				method: "GET",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
					Authorization: `Bearer ${this.token}`,
				},
			});
			const result = await rawResult.json();
			return result;
		},
		async addNote(content: string) {
			const uri = `${this.baseURl}/note`;
			const rawResult = await fetch(uri, {
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					Accept: "Application/json",
					Authorization: `Bearer ${this.token}`,
				},
				body: JSON.stringify({
					content: content,
				}),
			});
			const result = await rawResult.json();
			if (result.message !== "Success") {
				return false;
			}
			return true;
		},
	},
});

export default useAuth;
