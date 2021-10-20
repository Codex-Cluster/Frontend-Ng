// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYLjhbvequK6DZ1ydQI276EZA4iS5BBKk',
  authDomain: 'bookshelf-ar32.firebaseapp.com',
  projectId: 'bookshelf-ar32',
  storageBucket: 'bookshelf-ar32.appspot.com',
  messagingSenderId: '884033350295',
  appId: '1:884033350295:web:011685cde4750d7bc517d2',
  measurementId: 'G-YHV1NFCV5N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBYLjhbvequK6DZ1ydQI276EZA4iS5BBKk',
    authDomain: 'bookshelf-ar32.firebaseapp.com',
    projectId: 'bookshelf-ar32',
    storageBucket: 'bookshelf-ar32.appspot.com',
    messagingSenderId: '884033350295',
    appId: '1:884033350295:web:011685cde4750d7bc517d2',
    measurementId: 'G-YHV1NFCV5N',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
