import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyC1W5f58ESsHHvj-Q01x-QLKXYwDO8l2no",
        authDomain: "messenger-clone-f106b.firebaseapp.com",
        databaseURL: "https://messenger-clone-f106b.firebaseio.com",
        projectId: "messenger-clone-f106b",
        storageBucket: "messenger-clone-f106b.appspot.com",
        messagingSenderId: "251978831426",
        appId: "1:251978831426:web:c5c7c3e2216c0d120fffdb",
        measurementId: "G-73FR0QGCS6"
      
});

const db = firebaseApp.firestore();

export default db;