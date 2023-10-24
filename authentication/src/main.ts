import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { initializeApp } from "firebase/app";
import firebaseConfig from "@/Services/FirebaseService";

import { Amplify } from "aws-amplify";
import awsmobile from "@/aws-exports.js";

import Emitter from "tiny-emitter";

const app = createApp(App);

initializeApp(firebaseConfig);
Amplify.configure(awsmobile);

app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter.TinyEmitter();

app.use(router).mount("#app");
