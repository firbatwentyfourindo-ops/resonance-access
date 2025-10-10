// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyx3hfM_49dQPWrYeKBuZ_5umRPGvTjLI",
  authDomain: "greciaexperiment.firebaseapp.com",
  projectId: "greciaexperiment",
  storageBucket: "greciaexperiment.appspot.com",
  messagingSenderId: "449936532510",
  appId: "1:449936532510:web:9186754bceb92884c63a0f",
  measurementId: "G-5R08SBGN4N"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
