// Import the functions you need from the SDKs you need

// import { getAnalytics } from 'firebase/analytics';

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: 'wedblog-aad20.firebaseapp.com',
	projectId: 'wedblog-aad20',
	storageBucket: 'wedblog-aad20.appspot.com',
	messagingSenderId: '614192619908',
	appId: '1:614192619908:web:e31c48585dbcbc72ba7dd1',
	measurementId: 'G-2Z1XC71PNJ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
