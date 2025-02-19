import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ErrorText({ text }) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
    padding: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    // fontWeight: 'bold',
  },
});
