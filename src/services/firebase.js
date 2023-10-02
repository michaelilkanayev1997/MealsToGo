import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhg1XWl7mUOSu4NNWNrWRXvg_CAZecw5Q",
  authDomain: "mealstogo-d4df6.firebaseapp.com",
  projectId: "mealstogo-d4df6",
  storageBucket: "mealstogo-d4df6.appspot.com",
  messagingSenderId: "643444931887",
  appId: "1:643444931887:web:51f14ba37154675b7835da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(app);
