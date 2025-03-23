import { getDoc } from 'firebase/firestore'
import React from 'react'
import { DB } from '../config/firebase'

export default function useFetchNewUser() {
    const [user, setUser] = useState(null)
    const [userError, setUserError] = useState(null)
    const [userLoading, setUserLoading] = useState(false)



    const fetchNewUser = async (id) => {
        setUserLoading(true)
        try {
            const docRef = await getDoc(doc(DB, "users", id))

            if (docRef.exists()) {
                setUser(docRef.data())
                setUserLoading(false)
            }
        } catch (error) {
            setUserError(error.message)
            return null
        }

        return { fetchNewUser, user, userError, userLoading }

    }
}
