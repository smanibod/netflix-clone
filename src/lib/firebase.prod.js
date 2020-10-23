import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDQQCbcGBSiMoG7gBCHHwSleZQ-tn_pQUI",
  authDomain: "netflix-59de2.firebaseapp.com",
  databaseURL: "https://netflix-59de2.firebaseio.com",
  projectId: "netflix-59de2",
  storageBucket: "netflix-59de2.appspot.com",
  messagingSenderId: "94438601615",
  appId: "1:94438601615:web:490f1c9dd503dcc01a91fa",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
