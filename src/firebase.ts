import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAxNFU1K50ZaXLYGMA4uWqpcmtRWUgnDW0',
  authDomain: "beauty-ecommerce-app.firebaseapp.com",
  projectId: "beauty-ecommerce-app",
  storageBucket: "beauty-ecommerce-app.appspot.com",
  messagingSenderId: "152365420801",
  appId: "1:152365420801:web:0f4298f977c8e14c620b00",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
