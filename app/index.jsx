import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
 import WelcomeSlider from "../components/WelcomSlider/WelcomSlider.jsx"
export default function OnboardingScreen() {

  return (
    <View style={styles.container}>
      <WelcomeSlider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
