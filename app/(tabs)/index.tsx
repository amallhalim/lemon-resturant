import { Image, StyleSheet, Platform, View, Pressable, Button, Alert, TouchableHighlight } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';
import { Text } from 'react-native';
import Login from "../../pages/login/Login";
import SignUP from "../../pages/signUp/SignUP";
import FeedbackForm from "../../pages/menu/FeedbackForm";
import { useState } from 'react';

export default function HomeScreen() {
  const [timesPressed, setTimesPressed] = useState(0);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);




  function onPressFunction() {
    console.log("🚀 ~ onPressFunction ~ onPressFunction:", onPressFunction)

  }
  return (
    <MainLayout >
      <View style={{ flex: 1, backgroundColor: 'blue' ,width:"100%"}}>
      <ParallaxScrollView
      //  style={{ flex: 1 ,backgroundColor:"blue" }}
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
         
        }>
        {/* <FeedbackForm/> */}
        <Login />
        {/* <SignUP/> */}
        <ThemedView style={styles.titleContainer}>
        <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <ThemedText type="title">😂we</ThemedText>
          <View>
            <Pressable
              onPress={() => {
                setTimesPressed(current => current + 1);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              {({ pressed }) => (
                <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me--'}</Text>
              )}
            </Pressable>
            <Pressable onPress={onPressFunction}>
              <Text>I'm pressable!</Text>
            </Pressable>
          </View>
          <HelloWave />
        </ThemedView>
        <TouchableHighlight onPress={onPress}>
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
  titleContainer: {
    display: "flex",
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: "red"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: "green",
    display: "flex"
  },
  logBox: {
    padding: 20,
    margin: 10,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
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
