import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';
import { Text } from 'react-native';
import Login from "../../pages/login/Login";
import SignUP from "../../pages/signUp/SignUP";
import FeedbackForm from "../../pages/menu/FeedbackForm";

export default function HomeScreen() {
  return (
    <MainLayout >
      <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
        />
      }>
{/* <FeedbackForm/>a */}
      <Login/>
      {/* <SignUP/> */}

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome lemon 😂94==😂!</ThemedText>
        <View>
      </View>
        <HelloWave />
      </ThemedView>
   
    </ParallaxScrollView>
        </MainLayout>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
});
