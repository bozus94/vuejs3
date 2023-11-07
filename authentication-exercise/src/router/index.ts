import useAuth from "../store/auth";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotesView from "../views/NotesView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import NewNoteView from "../views/NewNoteView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/register",
		name: "register",
		component: RegisterView,
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/",
		name: "list",
		component: NotesView,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/new-note",
		name: "newnote",
		component: NewNoteView,
		meta: {
			requiresAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const store = useAuth();
	const token = store.token;

	if (to.meta.requiresAuth && token === "") {
		return next("login");
	}

	next();
});

export default router;
