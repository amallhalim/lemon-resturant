// app/AuthScreen.tsx (or rename to index.tsx if you want it as the root screen)
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import splashImg from "../../../assets/logo/Splash.png"
export default function HomeLoadingStartPagePage() {


  return (

    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={splashImg} resizeMode="cover" style={styles.image}>

      </ImageBackground>
    </SafeAreaView>

  </SafeAreaProvider>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    // backgroundColor: Colors.light.green[800],
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
