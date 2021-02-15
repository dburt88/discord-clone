import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqg93Eq-pZwx3qhmM7RKfbsPMgevVk4rE",
  authDomain: "discord-clone-9c857.firebaseapp.com",
  projectId: "discord-clone-9c857",
  storageBucket: "discord-clone-9c857.appspot.com",
  messagingSenderId: "630082160777",
  appId: "1:630082160777:web:d3b98073fef0c1756bde58",
  measurementId: "G-Z6K50YCEXR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebaseStore();
