// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAdfggT4re2LZGqw4naMrAESBubDjye86o',
  authDomain: 'codecleanse-44375.firebaseapp.com',
  projectId: 'codecleanse-44375',
  storageBucket: 'codecleanse-44375.appspot.com',
  messagingSenderId: '868481977994',
  appId: '1:868481977994:web:30d741ee63f645d814a773',
  measurementId: 'G-DE6ZNCZ7R3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore }
