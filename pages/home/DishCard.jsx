import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function DishCard({ dish }) {
    console.log("🚀 ~ DishCard ~ dish:", dish.img)
    const [count, useCount] = useState(0);
    const [allOrderData, setOrderData] = useState([])
    // console.log(JSON.stringify(allOrderData, null, 2));
    // const updateSelectedProduct = useProductStore(state => state.updateSelectedProduct);
  
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={() => {
                    router.push(`/dishs/${dish?.id}`)
                    // updateSelectedProduct(dish)
                }}>
                <Image
                    style={styles.tinyLogo}
                    source={dish?.img}
                />
            </TouchableOpacity>
            <Text style={styles.cardTitle}>{dish?.name}</Text>
            <View style={styles.menuItem}>
                <Text style={styles.menuItemPrice}>eeeeee{dish?.price}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    useCount(count + 1)
                    // onchangeDishCount(
                    //     { ...dish, count: count + 1 }
                    // )
                }}>
                    {count === 0 ? (
                        <View style={styles.ContainButton}>
                            <Text style={styles.buttonText}>Add +</Text>
                        </View>
                    ) : (
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
}

const styles = StyleSheet.create({
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 150,
      height: 200,
      backgroundColor: '#FFF',
      borderRadius: 30,
      padding: 20,
      borderRadius: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 10,
      shadowOpacity: 0.8,
      elevation: 5, 
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
    tinyLogo: {
      width: 122,
      height: 80,
      borderRadius: 20,
      borderColor: "black",
      backgroundColor: Colors.light.background.secondary,
      borderWidth: 1,
    },
  });