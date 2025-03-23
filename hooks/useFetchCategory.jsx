import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { DB } from '../config/firebase'

export default function useFetchCategory() {
const [categories, setCategorys] = useState([]);
const [catergoryLoading, setCategoryLoading] = useState(false);
const [categoryError, setCategoryError] = useState('');
const fetchAllCategory = async () => {
    setCategoryLoading(true);   
    try {  
        const querySnapshot =await getDocs(collection(DB, "categories"));
        const categories =querySnapshot.docs.map(doc =>{
            return {...doc.data(),id:doc.id}
        }) 
setCategorys(categories)
    } catch (error) {
        setCategoryError(error.message)
    }
    setCategoryLoading(false);
  }



  return {categories,catergoryLoading,categoryError,fetchAllCategory}
}