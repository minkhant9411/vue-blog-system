// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo7wDxnRjRzjHUa64U87HLDIGEJeQGIA0',
  authDomain: 'vue-blog-system-62905.firebaseapp.com',
  projectId: 'vue-blog-system-62905',
  storageBucket: 'vue-blog-system-62905.appspot.com',
  messagingSenderId: '931535730436',
  appId: '1:931535730436:web:49b38697234219be95c251',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//database setup
let db = getFirestore(app);
// let datas = collection(db, 'blogs');
export { db };
