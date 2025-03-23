import { useState } from 'react';
import { DB } from '../config/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

export default function useAddSingleDish() {
  const [dishs, setDishs] = useState([]);
  
  const AddSingleDish = async () => {
    try {
      const newDishs =     {
        img: require('../assets/dishs/burgger/burger2.jpg'),
        name: 'Caesar Salad',
        desc: 'A fresh and crispy Caesar salad with lettuce, croutons, and Caesar dressing.',
        price: 9.99,
        size: ["small", "medium", "large"],
        rate: 3,
        duration: 20,
        category: {
          id: "1",  
          name: "Salads",  
          img: require('../assets/dishs/burgger/burger.jpg'),
        },
      }

      const dishRef = collection(DB, 'dishes');

      const newDocRef = doc(dishRef); 

      const dishWithId = { ...newDishs, id: newDocRef.id };
      await setDoc(newDocRef, dishWithId); 

      setDishs(prevState => [...prevState, dishWithId]);
    } catch (error) {
      console.error("Error adding dish: ", error);
    }
  };

  return { dishs, AddSingleDish };
}
