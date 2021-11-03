import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../component/Firebase/firebase.int";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUsers] = useState({});

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleprovider = new GoogleAuthProvider();

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        setUsers(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };
  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
