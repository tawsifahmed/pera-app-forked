// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyADi7tePvFHqmiMN70NfkJKm7DSBYFOThI",
    authDomain: "the-pera-2f278.firebaseapp.com",
    projectId: "the-pera-2f278",
    storageBucket: "the-pera-2f278.firebasestorage.app",
    messagingSenderId: "296010285017",
    appId: "1:296010285017:web:cb6274faaaccba106563c8",
    measurementId: "G-HKWQK0JK5Z"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Forground
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    toast.add({ severity: 'success', summary: payload.notification.title, detail: payload.notification.body, group: 'br', life: 3000 })
    // ...
  });


//   Background 
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title || '';
    const notificationOptions = {
      body: payload.notification.body || '',
      image:payload.notification.image || '',
      icon: '/logo.svg'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });