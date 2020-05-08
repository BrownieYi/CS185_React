import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD--_28wc7h9OOrHcLX1ZBVZLKtM9QY-Gc",
    authDomain: "guestbook-63bc1.firebaseapp.com",
    databaseURL: "https://guestbook-63bc1.firebaseio.com",
  }
firebase.initializeApp(config);
export default firebase;