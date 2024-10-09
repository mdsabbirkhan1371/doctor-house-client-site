import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../../Firebase/firebase.config';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
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
      // token implement
      if (currentUser) {
        // get token and store
        const userInfo = {
          email: currentUser?.email,
        };
        axiosPublic.post('/jwt', userInfo).then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        });
      } else {
        // remove token if user is not available
        localStorage.removeItem('access-token');
      }
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
