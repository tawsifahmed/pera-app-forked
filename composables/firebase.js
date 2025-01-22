// plugins/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInAnonymously } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from 'firebase/messaging'
export const firebaseConfig = {
    apiKey: "AIzaSyB3goXMmMcgeBv3DMYxiky-FON2yewTRu8",
    authDomain: "peraa-app.firebaseapp.com",
    projectId: "peraa-app",
    storageBucket: "peraa-app.firebasestorage.app",
    messagingSenderId: "240776140465",
    appId: "1:240776140465:web:2c295d4d0d9c0317f5f490",
    measurementId: "G-MB77HDRSMQ"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth();
// signInAnonymously(auth)
//     .then(() => {
//         console.log('signed in')
//         // Signed in..
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ...
//     });
// for Notification
const messaging = getMessaging(app);
const useFCMToken = async () => {
    const token = await getToken(messaging, { vapidKey: 'BJD5YqS3ULH6ZNcDxiMwiJd3mibGIk03cNX5e6xqY_Y_nbZaDf7vcf6HEKLMEy_TjcFZn5qKtN4sjWHdwLG2X9A' }).then((currentToken) => {
        if (currentToken) {
            // console.log(currentToken)
            return currentToken;
            // Send the token to your server and update the UI if necessary
            // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            return null;
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
    return token;
}

// onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
// });
// Permission
function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            // console.log('Notification permission granted.');
        }
    })
}
requestPermission();
const provider = new GoogleAuthProvider();
export { auth, provider, messaging, useFCMToken };
