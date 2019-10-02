import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBiw3CEJ3EMrKWmR1pcoamSAnf4NVS2BdI",
  authDomain: "test-c13f7.firebaseapp.com",
  databaseURL: "https://test-c13f7.firebaseio.com",
  projectId: "test-c13f7",
  storageBucket: "",
  messagingSenderId: "343787869068",
  appId: "1:343787869068:web:3f2950e5c97ebec2c13ca9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.database()