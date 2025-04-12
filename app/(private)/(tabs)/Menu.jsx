import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useProductStore } from '@/store';
import useFetchDish from '@/hooks/useFetchDish';

export default function Menu() {
  const [allOrderData, setOrderData] = useState([])
  const [allDishesData ,setallDishs] = useState([]) 
  const updateSelectedProduct = useProductStore(state => state.updateSelectedProduct);
const {dishesData ,fetchDish}=useFetchDish()
useEffect(() => {
  fetchDish()
},[])

useEffect(() => {
  setallDishs(dishesData)
},[dishesData])

  const onchangeDishCount = (newCount) => {
    setOrderData((prev) => {
      return ( [ ...prev, { count: newCount }]) }
    )
  }
  const Card = ({ dish, onchangeDishCount }) => {
    const [count, useCount] = useState(0);
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress= {()=>{
            router.push(`/dishs/${dish.id}`)
            updateSelectedProduct(dish)
          }
          
        }

        >

        <Image
          style={styles.tinyLogo}
          source={dish?.img}
          
          />
          </TouchableOpacity>
        <Text style={styles.cardTitle}>{dish.name}</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemPrice}>{dish.price}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            useCount(count + 1)
            onchangeDishCount(
              { ...dish, count: count + 1 }
            )
          }
          }>
            {count === 0 ?(
                 <View style={styles.ContainButton}>
                 <Text style={styles.buttonText}>Add +</Text>
               </View>
            ):(
              <View style={styles.ContainButton}>
                <Text style={styles.circleButton}>-</Text>
                <Text style={styles.buttonText}>{count == 0 ? 0 : count}</Text>
                <Text style={styles.circleButton}> +</Text>
              </View>
              )}
          </TouchableOpacity>
        </View>
      </View>
    )
  
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍽️ Menu</Text>
      <View style={styles.row}>
        {allDishesData.map((dish, index) => (
          <Card key={index}  dish={dish}
            onchangeDishCount={onchangeDishCount}
          />
        ))}
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16
  },
  tinyLogo: {
    width: 122,
    height: 80,
    borderRadius: 20,
  },
  row: {
    flex: 1,
    width: "100%",
    // height:"90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: "wrap",
    overflowX:true
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: '43%',
    height: 200,
    margin: "3%",
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 2,
    borderRadius: 30,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.light.primary[800],
    marginBottom: 10,
  },

  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  ContainButton: {
    width: 80,
    height: 36,
    padding:3,
    color: Colors.light.white, 
    backgroundColor: Colors.light.primary[800],
    borderWidth:1,
    borderRadius: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    display: "flex", justifyContent: 'space-between' ,flexDirection:'row'
  },
  button: {
    width: 40,
    height: 40,
    color: Colors.light.primary[800],
    borderRadius: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  circleButton: {
    width: 20,
    height: 20,
    backgroundColor: Colors.light.white,
    color: Colors.light.primary[800], 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: 16,
    fontWeight:500, 
    textAlign: "center", 
  },
  buttonText: {
    fontSize: 20,
    flex:1,padding:2,
    color: Colors.light.white,
    textAlign: "center", 

  },
});



// order --------
// id 
// count 
