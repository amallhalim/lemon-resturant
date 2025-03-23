import { useState } from 'react';
import { DB } from '../config/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import allDishesData from "../StaticData/allDishesData"
export default function useAddAllDish() {
  const [allDishs, setallDishs] = useState([]);
  
  const AddAllDish = async () => {
    try {
      const dishRef = collection(DB, 'dishes');
      const addedDishes = [];
      for (let i = 0; i < allDishesData.length; i++) {
        const newDocRef = doc(dishRef); 
        const dishWithId = { ...allDishesData[0], id: newDocRef.id };
        await setDoc(newDocRef, dishWithId); 
        addedDishes.push(dishWithId);
      }
      setallDishs(prevState => [...prevState, addedDishes]);

    } catch (error) {
      console.error("Error adding dish: ", error);
    }
  };

  return { allDishs, AddAllDish };
}
