import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBAvellKlRK-EpG4I99Qa9ASX-EGkCBW3s',
  authDomain: 'aquatec-f1754.firebaseapp.com',
  databaseURL:
    'https://aquatec-f1754-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'aquatec-f1754',
  storageBucket: 'aquatec-f1754.appspot.com',
  messagingSenderId: '1025189424518',
  appId: '1:1025189424518:android:a6e4f20162a1f5bae19007',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
