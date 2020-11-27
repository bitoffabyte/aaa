import firebase from "firebase";
export const initialize = () => {
	firebase.initializeApp({
		apiKey: "AIzaSyALvNNpA2AlvxHyNEIpPdQWuVeZeHvqRVo",
		authDomain: "ccs-robo.firebaseapp.com",
		databaseURL: "https://ccs-robo.firebaseio.com",
		projectId: "ccs-robo",
		storageBucket: "ccs-robo.appspot.com",
		messagingSenderId: "1003390848111",
		appId: "1:1003390848111:web:3510e907a39215e946d19a",
		measurementId: "G-P7T76KVSWW",
	});
};

export const signIn = async () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.setCustomParameters({
		login_hint: "user@vitstudent.ac.in",
	});
	try {
		const result = await firebase.auth().signInWithPopup(provider);
		var user = result.user;
	} catch (error) {
		console.log(error);
		// var errorCode = error.code;
		// var errorMessage = error.message;
		// var email = error.email;
		// var credential = error.credential;
	}
};
export const email = async () => {
	try {
		const mail = await firebase.auth().currentUser.email;
		if (mail) {
			return mail;
		} else return null;
	} catch (err) {
		return null;
	}
};
