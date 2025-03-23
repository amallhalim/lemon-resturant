import { useState } from 'react';
import { DB } from '../config/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

export default function useAddSingleCategory() {
  const [categories, setCategorys] = useState([]);
  
  const AddAllCategory = async () => {
    try {
      const newCategorys =
        {
            id: "1",
            name: "Starters",
            image: require('../assets/category/hot-dog.png'),
          }

      const categoryRef = collection(DB, 'categories');

      const newDocRef = doc(categoryRef); 

      const categoryWithId = { ...newCategorys, id: newDocRef.id };
      await setDoc(newDocRef, categoryWithId); 

      setCategorys(prevState => [...prevState, categoryWithId]);
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  return { categories, AddAllCategory };
}
