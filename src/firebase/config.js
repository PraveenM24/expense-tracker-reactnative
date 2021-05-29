import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDH8RThqwDdaKWAGc_sVv-eunmcXbXK44s",
    authDomain: "expense-tracker-20df3.firebaseapp.com",
    projectId: "expense-tracker-20df3",
    storageBucket: "expense-tracker-20df3.appspot.com",
    messagingSenderId: "96007637032",
    appId: "1:96007637032:web:31595876e9ed8e151d0d1d"
};


firebase.initializeApp(firebaseConfig);


export { firebase };