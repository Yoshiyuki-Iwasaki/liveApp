// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2FEXkk64lNvuG72WsEKVWCYEoQm0qJ4k',
  authDomain: 'liveapp-f2406.firebaseapp.com',
  projectId: 'liveapp-f2406',
  storageBucket: 'liveapp-f2406.appspot.com',
  messagingSenderId: '538793819275',
  appId: '1:538793819275:web:21819c3353ea591c2b688e',
  measurementId: 'G-LXHLKHPL68',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firebase = getFirestore(app)

export default firebase
