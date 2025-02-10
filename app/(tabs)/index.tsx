import { Image, StyleSheet, View, Pressable, Button, Alert, TouchableHighlight, Text } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';
import Login from "../../pages/login/Login";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const incrementCount = () => setCount(count + 1);

  return (
    <MainLayout>
      <View style={styles.container}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.reactLogo}
            />
          }
        >
          <Login />
          <ThemedView style={styles.titleContainer}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <ThemedText type="title">😂 Welcome</ThemedText>
            {/* <Button title="Go to New Page" onPress={() => router.push('/w')} /> */}
            {/* <Button title="Go to New Page" onPress={() => router.push('/w')} /> */}
          </ThemedView>
            {/* <Button title="Go to profile" onPress={() => router.push('/Profile')} /> */}
            <Button title="Go to profile99" onPress={() => router.push('/profile')} />

          <View style={styles.pressableContainer}>
            <Pressable
              onPress={incrementCount}
              style={({ pressed }) => [
                styles.pressable,
                { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' },
              ]}
            >
              {({ pressed }) => (
                <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
              )}
            </Pressable>
            <Pressable onPress={() => console.log('Button pressed!')}>
              <Text style={styles.text}>I'm pressable!</Text>
            </Pressable>
          </View>

          <HelloWave />

          <TouchableHighlight onPress={incrementCount}>
            <View style={styles.button}>
              <Text>Touch Here</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{count || null}</Text>
          </View>
        </ParallaxScrollView>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'red',
    width: '100%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  pressableContainer: {
    marginVertical: 16,
  },
  pressable: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
