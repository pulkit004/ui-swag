import 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdttcFI3WOmzEeJODHQp1i3dOQOzhikzE',
  authDomain: 'ui-swag.firebaseapp.com',
  projectId: 'ui-swag',
  storageBucket: 'ui-swag.appspot.com',
  messagingSenderId: '1065612020526',
  appId: '1:1065612020526:web:6e62489f46fd0026f688bf',
  measurementId: 'G-ZWF7E3CWQM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
