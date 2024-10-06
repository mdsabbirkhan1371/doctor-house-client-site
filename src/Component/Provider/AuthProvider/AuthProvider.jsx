import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../../Firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // create user
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    return signOut(auth);
  };

  // user exist or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // const update user
  const updateUserProfile = (name, username) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      userName: username,
    });
  };
  const data = {
    isLoading,
    setLoading,
    user,
    setUser,
    createAccount,
    signInUser,
    updateUserProfile,
    logOut,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
