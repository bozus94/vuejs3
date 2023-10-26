import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => AboutView,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/login",
		name: "login",
		component: () => LoginView,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: () => DashboardView,
		meta: {
			requiresAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

//router.beforeEach se ejecutara antes de antes cada solicitud y ejecutara un guard para hacer comporbaciones antes de ir a la ruta.
router.beforeEach((to, from, next) => {
	const auth = false;

	if (to.meta.requiresAuth && !auth) {
		return next("login");
	}

	next();
});

export default router;
