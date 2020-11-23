import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCxdymQHw8HPNO5ykHRd6sj6PZ-NEZ8BBM",
//   authDomain: "clone-22228.firebaseapp.com",
//   databaseURL: "https://clone-22228.firebaseio.com",
//   projectId: "clone-22228",
//   storageBucket: "clone-22228.appspot.com",
//   messagingSenderId: "589386920941",
//   appId: "1:589386920941:web:e561882b1e35a26187ede4",
//   measurementId: "G-TL9CW3BD2H",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYqQo4Quwk02xD6lrRZ7ue7cULOQ7yj4",
  authDomain: "ecomm-app-666.firebaseapp.com",
  databaseURL: "https://ecomm-app-666.firebaseio.com",
  projectId: "ecomm-app-666",
  storageBucket: "ecomm-app-666.appspot.com",
  messagingSenderId: "741857440294",
  appId: "1:741857440294:web:bcacc060aa17fb6b096ce7",
  measurementId: "G-TS06CY68FZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

export { db, auth ,currentUser};
