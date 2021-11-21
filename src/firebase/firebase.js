import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCP147zV1DgWXDPz16MZm5UdeB_NmRfViw",
  authDomain: "health-carrd.firebaseapp.com",
  projectId: "health-carrd",
  storageBucket: "health-carrd.appspot.com",
  messagingSenderId: "783874692861",
  appId: "1:783874692861:web:45220b084732d74b045094",
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { provider, auth };
