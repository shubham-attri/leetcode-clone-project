import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	apiKey: "AIzaSyDb82vnhX8qNh6H92lGtu54s9Oh_YXg7rc",
	authDomain: "leetcode-clone-2875a.firebaseapp.com",
	projectId: "leetcode-clone-2875a",
	storageBucket: "leetcode-clone-2875a.appspot.com",
	messagingSenderId: "29080066915",
	appId: "1:29080066915:web:bbd737fb8cbdee11df5156"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
