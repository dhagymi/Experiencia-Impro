import * as firebase from "firebase/app";
import {
	getFirestore,
	collection,
	query,
	getDocs,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB54itmWB70n_gQ3q7008bogMnWH2nI9Ts",
	authDomain: "experiencia-impro.firebaseapp.com",
	projectId: "experiencia-impro",
	storageBucket: "experiencia-impro.appspot.com",
	messagingSenderId: "830046692481",
	appId: "1:830046692481:web:3fe7996c0407b3ff4b1980",
	measurementId: "G-1MSPJ22QFB",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getFirestoreData = async (collectionName, ...options) => {
	const collectionRef = collection(db, collectionName);

	let finalQuery = query(collectionRef, ...options);

	const snapshotGetted = await getDocs(finalQuery);

	const dataGetted = snapshotGetted.docs.map((doc) => {
		const info = { id: doc.id, ...doc.data() };

		return info;
	});

	return dataGetted;
};

export const addFirestoreData = async (collectionName, newDocument) => {
	const collectionRef = collection(db, collectionName);
	const docRef = await addDoc(collectionRef, newDocument);

	return docRef.id;
};

export const setFirestoreData = async (collectionName, newProperties, id) => {
	const documentRef = getDocRef(collectionName, id);
	await setDoc(documentRef, newProperties, { merge: true });

	return true;
};

export const getDocRef = (collectionName, id) => {
	const documentRef = doc(db, collectionName, id);
	return documentRef;
};
