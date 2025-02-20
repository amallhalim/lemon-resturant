import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
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
      <Text style={styles.cardTitle}>{name}</Text>
      <Image
        style={styles.tinyLogo}
        source={img}
      />
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>{name}</Text>
        <Text style={styles.menuItemText}>{des}</Text>
        <Text style={styles.menuItemPrice}>{price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  }, tinyLogo: {
    width: 100,
    height: 100,
  },
  row: {
    flex: 1,
    width:"100%",
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    marginBottom: 20,
    flexWrap :"wrap",
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    width:"48%",
    minWidth: '48%',
  height: '50px',
    margin:"1%",
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.primary[800],
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
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
    margin :50,
    marginTop: 20,
  },
  orderText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

