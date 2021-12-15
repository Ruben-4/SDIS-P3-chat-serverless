// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

firebase.auth().onAuthStateChanged(() => new Vue({
    render: h => h(App),
  }).$mount('#app'))