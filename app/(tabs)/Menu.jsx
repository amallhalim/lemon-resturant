import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍽️ Menu</Text>

      {/* Starters */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🥗 Starters</Text>
        <MenuItem name="Caesar Salad" price="$5.99" />
        <MenuItem name="Bruschetta" price="$6.49" />
        <MenuItem name="Stuffed Mushrooms" price="$7.99" />
      </View>

      {/* Main Course */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍛 Main Course</Text>
        <MenuItem name="Grilled Chicken" price="$12.99" />
        <MenuItem name="Pasta Alfredo" price="$11.49" />
        <MenuItem name="Steak with Veggies" price="$18.99" />
      </View>

      {/* Desserts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍰 Desserts</Text>
        <MenuItem name="Chocolate Lava Cake" price="$6.99" />
        <MenuItem name="Cheesecake" price="$5.99" />
        <MenuItem name="Ice Cream Sundae" price="$4.49" />
      </View>

      {/* Drinks */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🥤 Drinks</Text>
        <MenuItem name="Fresh Lemonade" price="$3.99" />
        <MenuItem name="Iced Coffee" price="$4.49" />
        <MenuItem name="Smoothie" price="$5.99" />
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Menu Item Component
const MenuItem = ({ name, price }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{name}</Text>
    <Text style={styles.menuItemPrice}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
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
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  orderText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

