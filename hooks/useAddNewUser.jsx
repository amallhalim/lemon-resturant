import React, { useState } from 'react'
import { DB } from '../config/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function useAddNewUser() {
  const [user, setUser] = useState(null)
  const [userError, setUserError] = useState(null)
  const [userLoading, setUserLoading] = useState(false)

  const addNewUser = (user) => {
    console.log("🚀 ~ addNewUser ~ user:", user)
    setUserLoading(true)
    const docRef = setDoc(doc(DB, "users",user?.uid), user)
    try {
      if (docRef.exists()) {
        setUser(docRef.data())
        setUserLoading(false)
      }
    } catch (error) {
      setUserError(error.message)

    }
    setUserLoading(false)

  }
  return { user, userError, userLoading, addNewUser }
}
