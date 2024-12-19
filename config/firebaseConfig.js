import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFL-To9lWoCDc1gcTWvBoeUUCv2yGrXsk",
  authDomain: "taleem-1b358.firebaseapp.com",
  projectId: "taleem-1b358",
  storageBucket: "taleem-1b358.firebasestorage.app",
  messagingSenderId: "248342977227",
  appId: "1:248342977227:web:f7cc23d73c78ac70bb994e",
  measurementId: "G-J7RG4GCFHT",
};
let analytics;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use analytics only in the browser
if (typeof window !== "undefined") {
  const { getAnalytics } = require("firebase/analytics");
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export { analytics };
