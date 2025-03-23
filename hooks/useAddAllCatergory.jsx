import { useState } from 'react';
import { DB } from '../config/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import allCategoryesData from "../StaticData/categoryData"
export default function useAddAllCategory() {
  const [allCategorys, setallCategorys] = useState([]);
  
  const AddAllCategory = async () => {
    try {
      const categoryRef = collection(DB, 'categories');
      const addedCategoryes = [];
      for (let i = 0; i < allCategoryesData.length; i++) {
        const newDocRef = doc(categoryRef); 
        const categoryWithId = { ...allCategoryesData[i], id: newDocRef.id };
        await setDoc(newDocRef, categoryWithId); 
        addedCategoryes.push(categoryWithId);
      }
      setallCategorys(prevState => [...prevState, ...addedCategoryes]);

    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  return { allCategorys, AddAllCategory };
}
