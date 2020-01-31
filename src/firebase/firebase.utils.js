import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyChVDZjXObf5K2Ul-8J2IRHy7fio5TS2PQ",
    authDomain: "crwn-db-64c95.firebaseapp.com",
    databaseURL: "https://crwn-db-64c95.firebaseio.com",
    projectId: "crwn-db-64c95",
    storageBucket: "crwn-db-64c95.appspot.com",
    messagingSenderId: "916117037200",
    appId: "1:916117037200:web:b4a5cbab74936f7e0e3815"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase