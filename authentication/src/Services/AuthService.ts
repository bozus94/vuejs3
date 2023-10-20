import { Ref, ref } from "vue";

class AuthService {
	private jwt: Ref<object>;
	private error: Ref<string>;
	private baseUrl = "http://api_auth.test/api/v1";

	constructor() {
		this.jwt = ref({});

		this.error = ref("");
	}

	public getJwt(): Ref<object> {
		return this.jwt;
	}
	public getError(): Ref<string> {
		return this.error;
	}

	public async login(email: string, password: string): Promise<boolean> {
		try {
			const req = await fetch(`${this.baseUrl}/login`, {
				method: "POST",
				headers: {
					accept: "aplication/json",
					"content-type": "aplication/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});

			const res = await req.json();

			if ("error" in res) {
				this.error.value = res.error.message;
				return false;
			}
			this.jwt.value = res;
			console.log(this.getJwt());
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async register(name: string, email: string, password: string): Promise<boolean> {
		try {
			const req = await fetch(`${this.baseUrl}/register`, {
				method: "POST",
				headers: {
					accept: "aplication/json",
					"content-type": "aplication/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
			});

			const res = await req.json();

			if ("error" in res) {
				this.error.value = res.error.message;
				return false;
			}

			this.jwt.value = res;
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
export default AuthService;
