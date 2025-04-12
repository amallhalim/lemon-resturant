import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { DB } from '../config/firebase'

export default function useFetchDish() {
    const [dishesData, setDishesData] = useState([])
    const [errorFetchDishState, seterrorFetchDishState] = useState('');
    const [fetchDishsLoading, setfetchDishsLoading] = useState(false);


    const fetchDish = async (filterKey) => {
        setfetchDishsLoading(true)
        try {
            let quary = collection(DB, "dishes")
            if(filterKey&&filterKey.key&&filterKey.value){
                quary = query(quary, where(filterKey.key, "==", filterKey.value));
            }
            const querySnapshot = await getDocs(quary);
            const dishes = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            });
            setDishesData(dishes)

        } catch (error) {
            seterrorFetchDishState(error.message)
            console.log("🚀 ~ fetchDish ~ error:", error)

        }
        setfetchDishsLoading(false)

    }
    return { dishesData, fetchDishsLoading, errorFetchDishState, fetchDish }
}