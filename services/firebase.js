// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQEfah5ocwBklyh09Du2g5XOpaHfSiAzY",
    authDomain: "sdis-chat-serverless.firebaseapp.com",
    projectId: "sdis-chat-serverless",
    storageBucket: "sdis-chat-serverless.appspot.com",
    messagingSenderId: "419587952897",
    appId: "1:419587952897:web:e4fa69cf65cc8510a4cb00",
    measurementId: "G-WX500CE7QJ"
  };
  
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    //authenticator
const provider_auth = new GoogleAuthProvider();

export async function loggear(callback){
        const auth = getAuth();
    signInWithPopup(auth, provider_auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        logEvent(analytics, 'loggeo con éxito');
        callback(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        callback(error)
    });

}

export async function desloggear(callback){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    logEvent(analytics, 'desloggeo con éxito');
    callback(true)
    }).catch((error) => {
    // An error happened.
    callback(false)
    });
}

    //cloud firestore
const db = getFirestore();
const coleccion = collection(db, 'mensajes_chat');

export async function addMessage(message) {
    const docRef = await addDoc(coleccion,message)
} 
export function listening(callback){
    const unsubscribe = onSnapshot(coleccion, (mensajes) => {///eing????????
        const datos_fs = [];
        mensajes.forEach((doc) => {
            datos_fs.push(doc.data());
        });
        callback(datos_fs)
    })
}