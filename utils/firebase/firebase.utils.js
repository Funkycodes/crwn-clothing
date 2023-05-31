import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFhmWeYbq0QU_PNDh_oNDaG1fL8JrRrLQ",
  authDomain: "crwn-clothing-c883b.firebaseapp.com",
  projectId: "crwn-clothing-c883b",
  storageBucket: "crwn-clothing-c883b.appspot.com",
  messagingSenderId: "111767299042",
  appId: "1:111767299042:web:493a7e59ffd4b372380fbb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, otherParams = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  const userDocExists = userSnapShot.exists();

  if (!userDocExists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...otherParams,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmail = async ({ email, password }) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
