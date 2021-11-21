import React, { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { provider, auth } from "../firebase/firebase";
export const AuthContext = createContext();

const AuthContextprovider = (props) => {
  const [currentuser, setUser] = useState("");
  const [load, setLoading] = useState(true);
  ///////Current User

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          phonenum: user.phoneNumber,
          photo: user.photoURL,
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
  return (
    <AuthContext.Provider
      value={{ load: load, user: currentuser, SignIn, SignOut }}
    >
      {load ? <h1>Loading</h1> : props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextprovider;
