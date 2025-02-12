import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
  const [text, setText] = useState('');
  const [note, setNote] = useState('');
  const [userData, setUserData] = useState('');
  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.heading}>Welcome!</Text>
          </View>
        </ImageBackground>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            onChangeText={(newText) => setUserData(newText)}
            value={userData}
          />
          <Text style={styles.displayText}>Hello, {userData}!</Text>

          <TextInput
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={(newText) => setText(newText)}
            value={text}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="note"
            onChangeText={(newText) => setNote(newText)}
            value={note}
            multiline
            maxLength={40}
            numberOfLines={4}
          /> */}
    
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 0.4, // Adjust the height of the image section
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 0.6, // Remaining height for inputs and text
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  displayText: {
    marginBottom: 20,
    fontSize: 16,
    color: 'gray',
  },
});
