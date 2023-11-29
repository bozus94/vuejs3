import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue3-lazyload";

import "@/assets/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(router).use(VueLazyLoad, {}).mount("#app");
