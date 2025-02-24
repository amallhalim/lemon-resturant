import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import React, { useState } from 'react';
import FoodItems from "../../StaticData/FoodItems"
import { Colors } from '@/constants/Colors';

export default function Menu() {
  const [allOrderData, setOrderData] = useState([])
  // console.log(JSON.stringify(allOrderData, null, 2));

  const onchangeDishCount = (newCount) => {
    setOrderData((prev) => {
      return ( [ ...prev, { count: newCount }]) }
    )
  }
  const Card = ({ img, name, des, price, id, onchangeDishCount }) => {
    const [count, useCount] = useState(0);
    console.log("🚀 ~ Card ~ count:", count)
    return (
      <View style={styles.card}>
        <Image
          style={styles.tinyLogo}
          source={img}
        />
        <Text style={styles.cardTitle}>{name}</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemPrice}>{price}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            useCount(count + 1)
            onchangeDishCount(
              { img, name, des, price, id, count: count + 1 }
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
        {FoodItems.map((dish, index) => (
          <Card key={index} id={dish.id}
            img={dish.img} name={dish.name}
            des={dish.des} price={dish.price}
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
