import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';  // Use the correct hook for navigation

export default function SignUp() {
  const router = useRouter();  // Using the useRouter hook to handle navigation

  return (
    <View style={styles.container}>  {/* Apply the container style */}
      <Text style={styles.title}>Sign Up</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Login')}  // Navigate to Login screen
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.light.green[800],  // Ensure Colors is set up correctly
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
