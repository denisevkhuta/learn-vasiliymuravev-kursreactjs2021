import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFk509cODsnBZrxudc_rFn4PkzEvaDquI",
    authDomain: "learn-vasiliymuravev-kursreact.firebaseapp.com",
    databaseURL: "https://learn-vasiliymuravev-kursreact-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base