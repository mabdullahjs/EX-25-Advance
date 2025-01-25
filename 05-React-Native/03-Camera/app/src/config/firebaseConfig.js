import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyC-Qra536bSfG0a8i8Tbun-THmxQt9Xc-0",
    authDomain: "expertizo-advance-a4e1a.firebaseapp.com",
    projectId: "expertizo-advance-a4e1a",
    storageBucket: "expertizo-advance-a4e1a.firebasestorage.app",
    messagingSenderId: "249559753802",
    appId: "1:249559753802:web:23244ac8f57e97e2c1f2b3",
    measurementId: "G-QNREKVGVVB"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});