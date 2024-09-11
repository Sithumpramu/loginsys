import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNsAcRYE9eHDv-wY3-vLMuoExpe2niOVI",
    authDomain: "signup-sit313.firebaseapp.com",
    projectId: "signup-sit313",
    storageBucket: "signup-sit313.appspot.com",
    messagingSenderId: "302699543363",
    appId: "1:302699543363:web:1d7664ba66b0b833310df6"
};

initializeApp(firebaseConfig); // No need to assign it to a variable

export const auth = getAuth();
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                email,
                createdAt,
                ...additionalData
            });
            console.log('User document created successfully');
        } catch (error) {
            console.log('Error creating the user document:', error.message);
        }
    }

    return userDocRef;
};

export const createUser = (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
