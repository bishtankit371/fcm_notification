// importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-sw.js');
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
//
// // import { initializeApp } from "firebase/app";
// // import { getMessaging } from "firebase/messaging/sw";
//
// // import { getMessaging } from "firebase/messaging";
// import {  getToken } from "firebase/messaging";
//
//   const firebaseConfig = {
//
//     apiKey: "AIzaSyAdeMHDA0gWNjqazv2eAQlVG7KOX6edADU",
//
//     authDomain: "pushnotification-24e6f.firebaseapp.com",
//
//     projectId: "pushnotification-24e6f",
//
//     storageBucket: "pushnotification-24e6f.appspot.com",
//
//     messagingSenderId: "845803456616",
//
//     appId: "1:845803456616:web:ddd2294c6c6d04e47d93dd",
//
//     measurementId: "G-03W4FV4E77"
//
//   };
//
// const app = initializeApp(firebaseConfig);
//
//
// const messaging = getMessaging(app);

// ----------------------------------------------------------------------------------------------


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// console.log("SW file got loaded");
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
//
// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// });
//
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();

// ---------------------------------------------------------------------------------------------------

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
      apiKey: "AIzaSyAdeMHDA0gWNjqazv2eAQlVG7KOX6edADU",

      authDomain: "pushnotification-24e6f.firebaseapp.com",

      projectId: "pushnotification-24e6f",

      storageBucket: "pushnotification-24e6f.appspot.com",

      messagingSenderId: "845803456616",

      appId: "1:845803456616:web:ddd2294c6c6d04e47d93dd",

      measurementId: "G-03W4FV4E77"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
