// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Ga9stB54bjXzVGFKhePgnSsrTod-Z5I",
  authDomain: "trust-3a49c.firebaseapp.com",
  databaseURL: "https://trust-3a49c-default-rtdb.firebaseio.com",
  projectId: "trust-3a49c",
  storageBucket: "trust-3a49c.appspot.com",
  messagingSenderId: "166881385916",
  appId: "1:166881385916:web:96cebcd40e072ae2cd5fb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function writeToDatabase(path, data) {
  set(ref(db, path), data);
}

function updateToDatabase(path, data) {
  update(ref(db, path), data);
}

function checkIfUserSubmitted(MID) {
  return new Promise((resolve, reject) => {
    const demographicRef = ref(db, `${MID}/demographic`);
    onValue(
      demographicRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data !== null);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export { writeToDatabase, updateToDatabase, checkIfUserSubmitted };
