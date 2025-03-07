import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Hello() {
  return (
    <View>
       <View style={styles.container}>
       <FontAwesome5 name="lemon" size={24} color="black" />
       <TouchableOpacity
         style={styles.button}
         onPress={() => router.push('/Home')}
       >
         <Text style={styles.buttonText}>Home</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         onPress={() => router.push('/OnboardingScreen')}
       >
         <Text style={styles.buttonText}>OnboardingScreen</Text>
       </TouchableOpacity>
       <Text style={styles.title}>Welcome!</Text>
       <TouchableOpacity
         style={styles.button}
         onPress={() => router.push('/Login')}
       >
         <Text style={styles.buttonText}>Log In</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,  // Adjust width based on your layout
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FFA500', // Example color for the button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#888',
  },
});
