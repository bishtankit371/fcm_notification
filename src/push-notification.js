import firebase from 'firebase/compat/app';
import { getMessaging } from "firebase/messaging";
import {  getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";

let messaging;

export const initializeFirebase = () => {
  // firebase.initializeApp({
  //   messagingSenderId: "845803456616"
  // });

  const firebaseConfig = {

    apiKey: "AIzaSyAdeMHDA0gWNjqazv2eAQlVG7KOX6edADU",

    authDomain: "pushnotification-24e6f.firebaseapp.com",

    projectId: "pushnotification-24e6f",

    storageBucket: "pushnotification-24e6f.appspot.com",

    messagingSenderId: "845803456616",

    appId: "1:845803456616:web:ddd2294c6c6d04e47d93dd",

    measurementId: "G-03W4FV4E77"

  };

  const app = initializeApp(firebaseConfig);

   messaging = getMessaging(app);

}


export const askForPermissioToReceiveNotifications = async () => {
  try {
    // const messaging = getMessaging();
    // await messaging.requestPermission();


      console.log('Requesting permission...');
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          // const token = await messaging.getToken();
          // console.log('token do usuário:', token);

          getToken(messaging, { vapidKey: 'BLDhtpZHDZdD7NOx3NChGxZZLemesUP-LiO0c3uMHJ5q2DRY8goUs178JbYIb9aaQeyJBocW3S6fg8FHylklEFA' }).then((currentToken) => {
            if (currentToken) {
              // Send the token to your server and update the UI if necessary
              // ...
              console.log("current token is: "+ currentToken);
              return currentToken;
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });

     }
   })




    // const token = await messaging.getToken();
    // console.log('token do usuário:', token);

    // return token;
  } catch (error) {
    console.error(error);
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
