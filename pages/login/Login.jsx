import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Login() {
  const [text, setText] = useState('');
  const [userData, setUserData] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="user name"
        onChangeText={newText => setUserData(newText)}
        value={userData}
      />
<Text> {userData}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <Text style={styles.text}>
        {text
          .split(' ')
          .map(() => '🍕')
          .join(' ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  text: {
    padding: 10,
    fontSize: 42,
  },
});
