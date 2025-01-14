// plugins/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from 'firebase/messaging'
export const firebaseConfig = {
    apiKey: "AIzaSyADi7tePvFHqmiMN70NfkJKm7DSBYFOThI",
    authDomain: "the-pera-2f278.firebaseapp.com",
    projectId: "the-pera-2f278",
    storageBucket: "the-pera-2f278.firebasestorage.app",
    messagingSenderId: "296010285017",
    appId: "1:296010285017:web:cb6274faaaccba106563c8",
    measurementId: "G-HKWQK0JK5Z"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth();

// for Notification
const messaging = getMessaging(app);
const setNotification = () => {

}

getToken(messaging, { vapidKey: 'BN77kNqVsILxQDNITFoTeCWehEDe13fCAEvwd933fSNMApLUHeD8xU85-3DxyEfMUxHp38FnICqBUAZ1qGDNcSI' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
});
// onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
// });
// Permission
function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        }
    })
}
requestPermission();
const provider = new GoogleAuthProvider();
export { auth, provider, setNotification };
