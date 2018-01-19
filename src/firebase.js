import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBb5j5F8c_GJOmD2LcYoMppu3g2YBKfSsU",
    authDomain: "photo-shop-7984e.firebaseapp.com",
    databaseURL: "https://photo-shop-7984e.firebaseio.com",
    projectId: "photo-shop-7984e",
    storageBucket: "photo-shop-7984e.appspot.com",
    messagingSenderId: "1061905403193"
  };
  firebase.initializeApp(config);

export default firebase;
