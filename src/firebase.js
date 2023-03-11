import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZzPm_wNtKmvMMUCm7BZITKHbro86rzoI",
  authDomain: "netlfix-clone-8159a.firebaseapp.com",
  projectId: "netlfix-clone-8159a",
  storageBucket: "netlfix-clone-8159a.appspot.com",
  messagingSenderId: "416103715865",
  appId: "1:416103715865:web:174851f5e62f3e87c40688"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { auth}
export default db;