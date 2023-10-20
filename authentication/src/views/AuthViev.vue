<template>
	<div>
		<nav>
			<div class="nav nav-tabs" id="nav-tab" role="tablist">
				<button
					class="nav-link active"
					id="nav-home-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-home"
					type="button"
					role="tab"
					aria-controls="nav-home"
					aria-selected="true"
				>
					Login
				</button>
				<button
					class="nav-link"
					id="nav-profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-profile"
					type="button"
					role="tab"
					aria-controls="nav-profile"
					aria-selected="false"
				>
					Register
				</button>
			</div>
		</nav>
		<div class="tab-content" id="nav-tabContent">
			<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							v-model="email"
						/>
					</div>
					<div class="form-group mt-4">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							v-model="password"
						/>
					</div>
					<button type="submit" class="btn btn-primary mt-4" @click.prevent="login">Login</button>
				</form>
			</div>
			<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
				<form>
					<div class="form-group">
						<label for="exampleInputName1">Name</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputName1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							v-model="name"
						/>
					</div>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							v-model="email"
						/>
					</div>
					<div class="form-group mt-4">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							v-model="password"
						/>
					</div>
					<button type="submit" class="btn btn-primary mt-4" @click.prevent="login">register</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import AuthService from "@/Services/AuthService";
import { Ref, ref } from "vue";

let name: Ref<string> = ref("");
let email: Ref<string> = ref("");
let password: Ref<string> = ref("");
let data: Ref<object> = ref({});

const login = async () => {
	const auth = new AuthService();
	const res = await auth.login(email.value, password.value);
	console.log(res);
	if (res) {
		data.value = auth.getJwt();
		console.log("data:", data.value);
	}
};
</script>
<style lang="scss">
.tab-pane form {
	width: 70%;
	margin: 0 auto;
	.form-group label {
		text-align: right !important;
	}
}
</style>
