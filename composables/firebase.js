// plugins/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: 'AIzaSyADi7tePvFHqmiMN70NfkJKm7DSBYFOThI',
    authDomain: 'the-pera-2f278.firebaseapp.com',
    projectId: 'the-pera-2f278',
    storageBucket: 'the-pera-2f278.appspot.com',
    messagingSenderId: '296010285017',
    appId: '1:296010285017:web:cb6274faaaccba106563c8',
    measurementId: "G-HKWQK0JK5Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
