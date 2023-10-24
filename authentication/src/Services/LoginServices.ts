import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";

class LoginServices {
	public auth;

	constructor() {
		this.auth = getAuth();
	}
	public async loginEmailPassword(email: string, password: string, msg = "logueado") {
		try {
			const res = await signInWithEmailAndPassword(this.auth, email, password);
			alert(msg);
			console.log(res);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	}

	public async loginGoogle(msg = "logueado") {
		try {
			const google = new GoogleAuthProvider();
			const res = await signInWithPopup(this.auth, google);
			console.log(res);
			alert(msg);
		} catch (error) {
			alert(error);
		}
	}

	public async loginFacebook(msg = "logueado") {
		try {
			const google = new FacebookAuthProvider();
			const res = await signInWithPopup(this.auth, google);
			console.log(res);
			alert(msg);
		} catch (error) {
			alert(error);
		}
	}

	public async loginTwitter(msg = "logueado") {
		try {
			const google = new TwitterAuthProvider();
			const res = await signInWithPopup(this.auth, google);
			console.log(res);
			alert(msg);
		} catch (error) {
			alert(error);
		}
	}

	public async loginGithub(msg = "logueado") {
		try {
			const google = new GithubAuthProvider();
			const res = await signInWithPopup(this.auth, google);
			console.log(res);
			alert(msg);
		} catch (error) {
			alert(error);
		}
	}
}
export default LoginServices;
