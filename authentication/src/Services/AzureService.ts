import { Ref, ref } from "vue";
import IMsalConfig from "@/interfaces/IMsalConfig";
class AzureService {
	private msalConfig: Ref<IMsalConfig>;
	private AccesToken: Ref<string>;

	constructor() {
		this.msalConfig = ref({
			auth: {
				clientId: "4a9bfc31-a711-445a-ae2d-80f301deb0e1",
				authority: "https://login.microsoftonline.com/adfa805c-b460-4fd2-b95f-fbdf1ec35d30",
			},
			cache: {
				cacheLocation: "localStorage",
			},
		});

		this.AccesToken = ref("");
	}

	setAccesToken(token: string): Ref<string> {
		this.AccesToken.value = token;
		return this.AccesToken;
	}

	getAccesToken(): Ref<string> {
		return this.AccesToken;
	}

	getMsalConfig(): Ref<IMsalConfig> {
		return this.msalConfig;
	}
}
export default AzureService;
