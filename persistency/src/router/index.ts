import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WatchView from "../views/WatchView.vue";
import LsView from "../views/LsView.vue";
import PiniaView from "../views/PiniaView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "pinia",
		component: PiniaView,
	},
	{
		path: "/storage",
		name: "storage",
		component: LsView,
	},
	{
		path: "/watch",
		name: "watch",
		component: WatchView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
