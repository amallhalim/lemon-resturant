// app/AuthScreen.tsx (or rename to index.tsx if you want it as the root screen)
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from "../constants/Colors"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import splashImg from "../assets/logo/Splash.png"
export default function WelcomeScreen() {
  const router = useRouter();
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (

    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={splashImg} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/home')} // or whatever route for guest access
      >
        <Text style={styles.buttonText}>Continue as Guest</Text>
      </TouchableOpacity>
    </View>
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
