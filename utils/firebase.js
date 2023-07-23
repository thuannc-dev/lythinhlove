import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPN6roBCI1DW-ziPZakJLyV7Z1ZW30LFk",
  authDomain: "hienoanh-wedding.firebaseapp.com",
  projectId: "hienoanh-wedding",
  storageBucket: "hienoanh-wedding.appspot.com",
  messagingSenderId: "947695586214",
  appId: "1:947695586214:web:0479d17f7962ee987add67",
  measurementId: "G-MLPWX1W5GD",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
