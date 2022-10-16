import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyAlhKyRfuBnKQNuT8fXyP1pYHJkNOA3-sA",
    authDomain: "constellations-f3de9.firebaseapp.com",
    databaseURL: "https://constellations-f3de9-default-rtdb.firebaseio.com",
    projectId: "constellations-f3de9",
    storageBucket: "constellations-f3de9.appspot.com",
    messagingSenderId: "697520192794",
    appId: "1:697520192794:web:4ec8e166928427b68f80a3",
    measurementId: "G-K2FV5T5H9V"
};

const app = initializeApp(config);
export const db = getFirestore(app);
export async function getCities() {
    const citiesCol = collection(db, 'orion');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }
