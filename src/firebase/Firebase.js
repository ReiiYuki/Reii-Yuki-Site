import firebaseConfigData from './config.json'
var firebaseConfig = {
  apiKey: firebaseConfigData.apiKey,
  authDomain: firebaseConfigData.authDomain,
  databaseURL: firebaseConfigData.databaseURL,
  storageBucket: firebaseConfigData.storageBucket,
  messagingSenderId: firebaseConfigData.messagingSenderId
};
const firebaseDatabase = require('firebase').initializeApp(firebaseConfig).database()

export default firebaseDatabase
