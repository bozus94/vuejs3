<template>
	<h1>Login AZURE</h1>
	<button @click="login">Login</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PublicClientApplication } from "@azure/msal-browser";
import AzureService from "@/Services/AzureService";

export default defineComponent({
	name: "AzureView",
	async created() {
		const azure = new AzureService();
		this.$msalInstance = new PublicClientApplication(azure.getMsalConfig().value);

		console.log(this.$msalInstance);
	},
	data() {
		return {
			account: "",
		};
	},
	methods: {
		async login() {
			console.log(this.$msalInstance);
			await this.$msalInstance
				.loginPopup({})
				.then(() => {
					const myAccounts = this.$msalInstance.getAllAccounts();
					this.account = myAccounts[0];
					this.emitter.emit("login", this.account);
				})
				.catch((error) => {
					alert(error);
					console.log(error);
				});
		},
	},
});

/* composition
export default defineComponent({
  name: "AzureView",
  setup() {
    let account = "";

    onMounted(() => {
      const azure = new AzureService();
      $msalInstance = new PublicClientApplication(azure.getMsalConfig().value);
    });

    const login = async () => {
      await $msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = $msalInstance.geAllAccounts();
          account = myAccounts[0];
          emitter.emit("logueado", account);
        })
        .catch((error: Error) => {
          alert(error);
        });
    };

    return { account, login };
  },
}); 
*/

/* setup
import { onMounted } from "vue";
import { PublicClientApplication } from "@azure/msal-browser";
import AzureService from "@/Services/AzureService";

let account = "";

onMounted(() => {
	const azure = new AzureService();
	$msalInstance = new PublicClientApplication(azure.getMsalConfig().value);
});

const login = async () => {
	await $msalInstance
		.loginPopup({})
		.then(() => {
			const myAccounts = $msalInstance.geAllAccounts();
			account = myAccounts[0];
			emitter.emit("logueado", account);
		})
		.catch((error: Error) => {
			alert(error);
		});
};
 */
</script>
