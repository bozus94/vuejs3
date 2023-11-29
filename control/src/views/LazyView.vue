<template>
	<div class="mx-auto container">
		<div class="row row-cols-3 g-4 text-center">
			<div class="col">
				<div class="card" aria-hidden="true" v-if="loading === true">
					<img src="https://placehold.co/400?text=Hello+World&font=roboto" class="placeholder col-12" />
					<div class="card-body">
						<h5 class="card-title placeholder-glow">
							<span class="placeholder col-6"></span>
						</h5>
						<p class="card-text placeholder-glow">
							<span class="placeholder col-7"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-6"></span>
							<span class="placeholder col-8"></span>
						</p>
						<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
					</div>
				</div>
				<div class="card" v-else>
					<img v-lazy="'https://picsum.photos/400'" class="card-img-top" />

					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card" aria-hidden="true" v-if="loading === true">
					<img src="https://placehold.co/200?text=Hello+World&font=roboto" class="placeholder col-12" />
					<div class="card-body">
						<h5 class="card-title placeholder-glow">
							<span class="placeholder col-6"></span>
						</h5>
						<p class="card-text placeholder-glow">
							<span class="placeholder col-7"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-6"></span>
							<span class="placeholder col-8"></span>
						</p>
						<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
					</div>
				</div>
				<div class="card" v-else>
					<img v-lazy="'https://picsum.photos/200'" class="card-img-top" />

					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, VNode, onMounted } from "vue";

const loading = ref(true);

const lazyOptions = reactive({
	src: "'https://picsum.photos/400/200'",
	lifecycle: {
		loading: (el: VNode) => {
			console.log("image loading", el);
		},
		error: (el: VNode) => {
			console.log("image error", el);
		},
		loaded: (el: VNode) => {
			console.log("image loaded", el);
		},
	},
});
onMounted(() => {
	console.log(loading.value);
	setTimeout(() => {
		loading.value = false;
		console.log(loading.value);
	}, 2500);
});
</script>

<style lang="scss" scoped>
.w-50 {
	width: 50%;
}
.w-75 {
	width: 75%;
}
.img-place {
	height: 200px;
}
</style>
