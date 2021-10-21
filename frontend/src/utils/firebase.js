import { initializeApp, firestore } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB54itmWB70n_gQ3q7008bogMnWH2nI9Ts",
	authDomain: "experiencia-impro.firebaseapp.com",
	projectId: "experiencia-impro",
	storageBucket: "experiencia-impro.appspot.com",
	messagingSenderId: "830046692481",
	appId: "1:830046692481:web:3fe7996c0407b3ff4b1980",
	measurementId: "G-1MSPJ22QFB",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => {
	return app;
};

export const getFirestore = () => {
	return firestore(app);
};
