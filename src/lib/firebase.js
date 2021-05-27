import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBG6EusgB2z_6Wrf2eY0oeLV6dG8gGVY1U',
  authDomain: 'react-instagram-clone-f2984.firebaseapp.com',
  projectId: 'react-instagram-clone-f2984',
  storageBucket: 'react-instagram-clone-f2984.appspot.com',
  messagingSenderId: '170630111023',
  appId: '1:170630111023:web:43bdc365f551e4b97e8bda'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
