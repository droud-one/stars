import { FirebaseApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    // Types
    CollectionReference,
    DocumentReference,
    DocumentSnapshot,
    Firestore
 } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.GATSBY_FB_API,
    authDomain: process.env.GATSBY_FB_DOMAIN,
    projectId: process.env.GATSBY_FB_PROJECT,
    storageBucket: process.env.GATSBY_FB_BUCKET,
    messagingSenderId: process.env.GATSBY_FB_SENDER,
    appId: process.env.GATSBY_FB_APP,
    measurementId: process.env.GATSBY_FB_TRACKER,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(app);

const getCollection = (name: string): CollectionReference => collection(firestore, name);
const getReference = (path: string): DocumentReference => doc(firestore, path);
const getSnapshot = async (path: string): Promise<DocumentSnapshot> => await getDoc(getReference(path));
const getAllDocs = async (collectionName: string) => await getDocs(getCollection(collectionName));
const add = async (collectionName: string, data: object): Promise<DocumentReference> => await addDoc(getCollection(collectionName), data);
const update = async (path: string, data: object) => await updateDoc(getReference(path), data);

export default {
    db: firestore,
    collection: getCollection,
    ref: getReference,
    get: getSnapshot,
    all: getAllDocs,
    add,
    update,
};