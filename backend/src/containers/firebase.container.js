import admin from "firebase-admin";
import emoji from "node-emoji";
import { Timestamp } from "@google-cloud/firestore";

import serviceAccount from "../db/experiencia-impro-firebase.js";

const connectDataBase = async () => {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        console.log(emoji.get("spiral_note_pad"), " Firebase connected");
        return admin;
    } catch (error) {
        console.log(error);
    }
};

class Container {
    static admin;
    static db;
    constructor(collection) {
        this.collection = collection;
        this.ref;
        this.query;
    }
    static async connect() {
        try {
            if (this.admin === undefined) {
                this.admin = await connectDataBase();
                if (this.admin !== undefined) {
                    this.db = await this.admin.firestore();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    async getRef(db) {
        try {
            this.ref = await db.collection(this.collection);
        } catch (error) {
            console.log(error);
        }
    }

    async getDocRef(id) {
        try {
            const docRef = await this.ref.doc(id);
            return docRef;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const snapshot = await this.ref.get();

            const docs = await snapshot.docs;

            const data = await docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const docRef = await this.getDocRef(id);
            const doc = await docRef.get();
            const data = await doc.data();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getConditional(
        whereFilter = [],
        limitFilter = null,
        orderFilter = []
    ) {
        /* Para whereFilter, debe recibir como parámetro un array de objetos con la siguiente forma:
		{
			field: "timestamp",
			operator: ">",
			value: date
		}
		Para limitFilter, debe recibir un número.
		Para orderFilter, debe recibir array con objetos con la siguiente forma:
		{
			field: "name",
			order: "asc"
		}
	 */
        try {
            // Filtro condicional
            this.query = whereFilter.reduce(
                (previousValue, { field, operator, value }) => {
                    if (field === "date") {
                        value = Timestamp.fromMillis(Date.parse(value));
                    }
                    return previousValue.where(field, operator, value);
                },
                this.ref
            );
            // Filtro de órden
            this.query = orderFilter.reduce(
                (previousValue, { field, order = "asc" }) => {
                    return previousValue.orderBy(field, order);
                },
                this.query
            );
            // Filtro de límite
            if (limitFilter) {
                this.query = this.query.limit(limitFilter);
            }

            const snapshot = await this.query.get();

            const docs = await snapshot.docs;

            const data = await docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            const dataWithJsFormatDate = await data.map((element) => {
                if (element.date) {
                    element.date = element.date.toDate();
                }
                return element;
            });

            return dataWithJsFormatDate;
        } catch (error) {
            console.log(error);
        }
    }

    async create(newItem) {
        try {
            for (const property in newItem) {
                if (newItem[property].ref) {
                    newItem[property] = await this.getDocRef(
                        newItem[property].ref
                    );
                }
            }

            const { id } = await this.ref.add(newItem);
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    async update(toUpdateId, toChange) {
        try {
            const doc = await this.getDocRef(toUpdateId);
            const response = await doc.update(toChange);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default Container;
