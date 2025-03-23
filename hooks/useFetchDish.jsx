import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { DB } from '../config/firebase'

export default function useFetchDish() {
    const [dishesData, setDishesData] = useState([])
    const [errorFetchDishState, seterrorFetchDishState] = useState('');
    const [fetchDishsLoading, setfetchDishsLoading] = useState(false);


    const fetchDish = async () => {
        setfetchDishsLoading(true)
        try {

            const querySnapshot = await getDocs(collection(DB, "dishes"));

            const dishes = querySnapshot.docs.map((doc) =>{
                return {...doc.data(), id: doc.id}});
            setDishesData(dishes)

        } catch (error) {
            seterrorFetchDishState(error.message)
        console.log("🚀 ~ fetchDish ~ error:", error)

        }
        setfetchDishsLoading(false)

    }
    return { dishesData,fetchDishsLoading,errorFetchDishState ,fetchDish }
}