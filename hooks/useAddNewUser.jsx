import React, { useState } from 'react'
import { DB } from '../config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import useUserStore from '../store/userStore'

export default function useAddNewUser() {
  const [user, setUserData] = useState(null)
  const [userError, setUserDataError] = useState(null)
  const [userLoading, setUserDataLoading] = useState(false)

  const setUser = useUserStore(state => state.setUser);

  const addNewUser = async(user) => {
    console.log("🚀 ~ addNewUser ~ user:", user)
    setUserDataLoading(true)
    const docRef =await setDoc(doc(DB, "users",user?.uid), user)
    try {
      if (await docRef.exists()) {
        setUserData(docRef.data())
        setUser(docRef.data())
        setUserDataLoading(false)

      }
        console.log("🚀 ~ addNewUser ~ docRef.data():", docRef.data())
    } catch (error) {
      setUserDataError(error.message)

    }
    setUserDataLoading(false)

  }
  return { user, userError, userLoading, addNewUser }
}
