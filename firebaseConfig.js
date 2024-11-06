// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBt5-Zfn6y1Nlz_4lURq6oIKxpfmOGPJGY",
  authDomain: "dashboard-eb9ad.firebaseapp.com",
  projectId: "dashboard-eb9ad",
  storageBucket: "dashboard-eb9ad.appspot.com",
  messagingSenderId: "891899801210",
  appId: "1:891899801210:web:a9fa51401e93ac5b1015c3",
  measurementId: "G-HBTHGQBTNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
