import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';
import FoodItems from "../../StaticData/FoodItems"
import { Colors } from '@/constants/Colors';

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍽️ Menu</Text>
      <View style={styles.row}>
        {FoodItems.map((dish, index) => (
          <Card key={index} img={dish.img} name={dish.name} des={dish.des} price={dish.price} />
        ))}
      </View>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const Card = ({ img, name, des, price }) => (
  <View style={styles.card}>
    <Image
      style={styles.tinyLogo}
      source={img}
    />
    <Text style={styles.cardTitle}>{name}</Text>
    <View style={styles.menuItem}>
      <Text style={styles.menuItemPrice}>{price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  }, 
  tinyLogo: {
    width: 122,
    height: 80,
    borderRadius: 20,

  },
  row: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: "wrap",
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // width:"48%",
    minWidth: '43%',
    height: 200,
    margin: "3%",
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#FFF',
    // backgroundColor: 'red',
    padding: 2,
    borderRadius: 30,
    // borderRadius:"
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.light.primary[800],
    marginBottom: 10,
  },
  menuItem: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingVertical: 8,
    // borderBottomWidth: 1,
    // borderBottomColor: '#DDD',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  orderButton: {
    backgroundColor: Colors.light.primary[800],
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    margin: 50,
    marginTop: 20,
  },
  orderText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  button: {
    width:40,
    height:40,
    backgroundColor: Colors.light.primary[800], // Background color
    // padding: 2, // Padding around the text
    borderRadius: 100, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text 
  },
  buttonText: {
    fontSize: 30,
    color: '#fff', // Text color
  },
});

