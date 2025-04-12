import React, { useState } from 'react';
import { DB } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import useUserStore from '../store/userStore';

export default function useAddNewUser() {
  const [user, setUserData] = useState(null);
  const [userError, setUserDataError] = useState(null);
  const [userLoading, setUserDataLoading] = useState(false);

  const setUser = useUserStore(state => state.setUser);

  const addNewUser = async (user) => {
    console.log("🚀 ~ addNewUser ~ user:", user);
    setUserDataLoading(true);

    try {
      const docRef = doc(DB, "users", user?.uid);

      // Create the document in Firestore
      await setDoc(docRef, user); 

      // Fetch the document after writing it
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // If document exists, update the state with the fetched data
        console.log("🚀 ~ addNewUser ~ docSnap.data():", docSnap.data());
        setUserData(docSnap.data());
        setUser(docSnap.data());
      } else {
        // Handle case if the document doesn't exist (this shouldn't happen)
        setUserDataError("User document not found.");
      }
    } catch (error) {
      setUserDataError(error.message);
      console.error("🚀 ~ addNewUser ~ error:", error);
    }

    setUserDataLoading(false);
  };

  return { user, userError, userLoading, addNewUser };
}
