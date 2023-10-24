<template>
	<div class="container">
		<div class="btn-group" role="group" aria-label="Basic outlined example">
			<button type="button" class="btn btn-outline-primary" @click.prevent="loginGoogle">Google</button>
			<button type="button" class="btn btn-outline-primary" @click.prevent="loginFacebook">Facebook</button>
			<button type="button" class="btn btn-outline-primary" @click.prevent="loginTwitter">Twitter</button>
			<button type="button" class="btn btn-outline-primary" @click.prevent="loginGithub">Github</button>
		</div>
	</div>
</template>
<script lang="ts" setup>
import LoginServices from "@/Services/LoginServices";

const login = new LoginServices();

const loginGoogle = () => {
	login.loginGoogle();
};
const loginFacebook = () => {
	login.loginFacebook();
};
const loginTwitter = () => {
	login.loginTwitter();
};
const loginGithub = () => {
	login.loginGithub();
};
</script>
