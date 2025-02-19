import { View, Text, TouchableOpacity } from 'react-native'
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
    </View>
  )
}