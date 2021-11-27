import React, { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { provider, auth, db } from "../firebase/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
export const AuthContext = createContext();

const AuthContextprovider = (props) => {
  const [currentuser, setUser] = useState("");
  const [newuser, setNewuser] = useState(true);
  const [load, setLoading] = useState(true);
  //////////Current User

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);

      if (user) {
        setLoading(false);
        setUser({
          name: user.displayName,
          email: user.email,
          phonenum: user.phoneNumber,
          photo: user.photoURL,
          uid: user.uid,
        });
      } else {
      }
    });
  }, []);
  ///////////SignIn
  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser({
          name: result.user.displayName,
          email: result.user.email,
          phonenum: result.user.phoneNumber,
          photo: result.user.photoURL,
          uid: result.user.uid,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /////////////////Signout
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    if (!load && currentuser) {
      AddData();
    }
  }, [currentuser]);
  function AddData() {
    const colRef2 = doc(db, "user", currentuser.uid);
    getDoc(colRef2).then((docu) => {
      if (!docu.exists()) {
        setDoc(doc(db, "user", currentuser.uid), {
          personaldata: {
            age: "Not Available",
            height: "Not Available",
            name: currentuser.name,
            sex: "Not Available",
            weight: "Not Available",
          },
          prescription: [],
          test: [],
        }).then(() => {
          setLoading(false);
          setNewuser(false);
        });
      } else {
        setLoading(false);
        setNewuser(false);
      }
    });
  }
  return (
    <AuthContext.Provider
      value={{
        load: load,
        user: currentuser,
        newuser: newuser,
        SignIn,
        SignOut,
      }}
    >
      {load ? <h1>Loading</h1> : props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextprovider;
