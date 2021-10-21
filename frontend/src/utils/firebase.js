import * as firebase from "firebase/app";
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
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

export const getFirestoreData = async (collectionName, ...queries) => {
	const collectionGetted = collection(db, collectionName);

	let dataGetted;

	if (queries.length) {
		const finalQuery = query(
			collectionGetted,
			...queries.map(({ field, compare, value }) => {
				return where(field, compare, value);
			})
		);

		const snapshotGetted = await getDocs(finalQuery);
		dataGetted = snapshotGetted.docs.map((doc) => doc.data());
	} else {
		const finalQuery = query(collectionGetted);
		const snapshotGetted = await getDocs(finalQuery);
		dataGetted = snapshotGetted.docs.map((doc) => doc.data());
	}
	return dataGetted;
};
