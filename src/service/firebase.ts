// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_UG0cZSET8FWkY7-Lect0mq20GlCpu3s',
  authDomain: 'take-exam-frontend.firebaseapp.com',
  projectId: 'take-exam-frontend',
  storageBucket: 'take-exam-frontend.appspot.com',
  messagingSenderId: '454488723744',
  appId: '1:454488723744:web:d31c07d8f8f9e4ba8f8745'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// const googleProvider = new GoogleAuthProvider()
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider)
//     return res.user
//   } catch (error) {
//     console.log(error)
//   }
// }

export { auth }
