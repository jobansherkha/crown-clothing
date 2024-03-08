import { initializeApp } from 'firebase/app';
import {getAuth,   
    signInWithPopup,
    GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

import{doc, getFirestore, setDoc, getDoc } from 'firebase/firestore'


    const firebaseConfig = {
        apiKey: "AIzaSyBSkMp7VqwDzzj26syXVi_LISAWe4HoZEk",
        authDomain: "crwn-clothing-b8354.firebaseapp.com",
        projectId: "crwn-clothing-b8354",
        storageBucket: "crwn-clothing-b8354.appspot.com",
        messagingSenderId: "111318091132",
        appId: "1:111318091132:web:3aa759adac0261078f90f9"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({
        prompt: 'select_account'
      })

      export const auth = getAuth();
      export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

      export const db = getFirestore();
      export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {})=>{
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
        
            try {
              await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
              });
            } catch (error) {
              console.log('error creating the user', error.message);
            }
          }
        
          return userDocRef;

      }

      export const createAuthWithEmailAndPassword = async(email,password)=>{
        if (!email || ! password) return;
        return await createUserWithEmailAndPassword(auth,email,password)

      }

      export const signInAuthWithEmailAndPassword = async(email, password)=>{
        if (!email || ! password) return;
        return await signInWithEmailAndPassword(auth,email,password)


      }
      export const signOutAuth = async()=>
         await signOut(auth)
      
         export const onAuthStateChangeListner = (callback)=>{
          onAuthStateChanged(auth,callback)
         }

      