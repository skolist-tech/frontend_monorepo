import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration from environment variables
const APIKEY =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_API_KEY) ||
  "";

const AUTHDOMAIN =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_AUTH_DOMAIN) ||
  "";

const PROJECTID =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_PROJECT_ID) ||
  "";

const STORAGEBUCKET =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_STORAGE_BUCKET) ||
  "";

const MESSAGINGSENDERID =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_MESSAGING_SENDER_ID) ||
  "";

const APPID =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env
      ?.VITE_FIREBASE_APP_ID) ||
  "";

// Firebase configuration object
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

// Check if Firebase is configured
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    "Firebase configuration is missing! Please check your .env file."
  );
  console.error(
    "Required variables: VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID, etc."
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);

export default app;
