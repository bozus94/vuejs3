import { messages } from "./../lang/messages";
import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const app = createApp(App);
const i18n = createI18n({
	locale: "en",
	fallbackLocale: "en",
	messages: messages,
});

app.use(i18n);
app.mount("#app");
