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
    apiKey: "AIzaSyB3goXMmMcgeBv3DMYxiky-FON2yewTRu8",
  authDomain: "peraa-app.firebaseapp.com",
  projectId: "peraa-app",
  storageBucket: "peraa-app.firebasestorage.app",
  messagingSenderId: "240776140465",
  appId: "1:240776140465:web:2c295d4d0d9c0317f5f490",
  measurementId: "G-MB77HDRSMQ"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Forground
// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     toast.add({ severity: 'success', summary: payload.notification.title, detail: payload.notification.body, group: 'br', life: 3000 })
//     // ...
//   });


//   Background 
messaging.onBackgroundMessage((payload) => {

    // Customize notification here
    const notificationTitle = payload.notification.title || '';
    const notificationOptions = {
      body: payload.notification.body || '',
      image:payload.notification.image || '',
      icon: '/logo.svg'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });