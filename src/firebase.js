import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
        // Paste your firebase config SDK
      
});

const db = firebaseApp.firestore();

export default db;
