import { Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import BackGroundFood3 from "../assets/background/loginBG.jpg"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppLayout from '../components/layouts/AppLayout';

export default function Login() {
  const router = useRouter();

  return (
      <AppLayout>
        
        <ImageBackground
          source={BackGroundFood3}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Login to BUI Food99</Text>

            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or</Text>

            <TextInput
              style={styles.input}
              placeholder="Username or Email"
              placeholderTextColor={Colors.light.font.lightGray}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={Colors.light.font.lightGray}
            />

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => console.log('Continue pressed')}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => console.log('Continue as Guest pressed')}>
              <Text style={styles.guestButtonText}>Continue as Guest</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have a BUI FOOD account?</Text>
              <TouchableOpacity onPress={() => router.push('/SignUp')}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>

        </AppLayout>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.light.font.secondary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  socialButton: {
    backgroundColor: Colors.light.primary[800],
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  socialButtonText: {
    color: Colors.light.font.white,
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    marginVertical: 15,
    color: Colors.light.font.gray,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: Colors.light.background.secondary,
    borderRadius: 8,
    marginBottom: 10,
    color: Colors.light.font.lightGray
  },
  forgotPasswordText: {
    color: Colors.light.primary[800],
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.light.primary[800],
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light.font.white,
    fontSize: 18,
  },
  guestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  guestButtonText: {
    color: Colors.light.primary[800],
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: Colors.light.font.gray,
  },
  signUpLink: {
    color: Colors.light.primary[800],
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
