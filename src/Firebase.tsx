import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCp-F3QUMkrNMcN0cOMq9wz3GIyWuFsOFA",
  authDomain: "portfolio-1bacc.firebaseapp.com",
  projectId: "portfolio-1bacc",
  storageBucket: "portfolio-1bacc.appspot.com",
  messagingSenderId: "875608659479",
  appId: "1:875608659479:web:32196b6b50b0a903d3ee52",
  measurementId: "G-KJV06KQPXB",
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
