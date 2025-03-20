// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWoLz4j1vicSBrjFFDBJdmrg_MCx-m5Vk",
  authDomain: "food-82704.firebaseapp.com",
  databaseURL: "https://food-82704-default-rtdb.firebaseio.com",
  projectId: "food-82704",
  storageBucket: "food-82704.firebasestorage.app",
  messagingSenderId: "17525288227",
  appId: "1:17525288227:web:879fca74d7036eba8d7096",
  measurementId: "G-7WNJ6PWJ1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const DB = getFirestore(app)
console.log("🚀 ~ DB:", DB)
// const storageSdk = getStorage(app);
// const auth = getAuth(app);
// console.log("🚀 ~ auth:", auth)

// const analytics = getAnalytics(app);
export { DB }