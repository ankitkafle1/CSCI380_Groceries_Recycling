import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC_LL19bxqf_GIDf3Uj1xtN5Dz_rhIz5d8",
  authDomain: "helping-hand-72f06.firebaseapp.com",
  projectId: "helping-hand-72f06",
  storageBucket: "helping-hand-72f06.appspot.com",
  messagingSenderId: "468001297596",
  appId: "1:468001297596:web:0d196050dc4444591b2cb9",
  measurementId: "G-X6KRJL00SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;