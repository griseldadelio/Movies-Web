import firebaseAuth from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4A-BCRX1SMIAZMaiNH04adqlsxpHx8hs",
  authDomain: "movie-web-26836.firebaseapp.com",
  databaseURL: "https://movie-web-26836-default-rtdb.firebaseio.com",
  projectId: "movie-web-26836",
  storageBucket: "movie-web-26836.appspot.com",
  messagingSenderId: "59063563045",
  appId: "1:59063563045:web:4b1ec263998ea8268aa0cc"
};
// Initialize Firebase

const app = firebaseAuth.initializeApp(firebaseConfig);
const db = app.firestore();

export default app;
export { db };
