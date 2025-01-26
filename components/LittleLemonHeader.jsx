import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Little Lemon Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
