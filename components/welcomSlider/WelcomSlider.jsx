import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Order from Top Chefs',
    text: 'Discover and order delicious meals from your favorite chefs with just a few taps.',
    image: require('../../assets/vector/Chef-bro.png'),
  },
  {
    key: '2',
    title: 'Fast & Secure Delivery',
    text: 'We ensure that your food reaches you fresh, hot, and on time!',
    image: require('../../assets/vector/Take Away-pana.png'),
  },
  {
    key: '3',
    title: 'Track Your Order',
    text: 'Easily track your order in real-time and stay updated on its status.',
    image: require('../../assets/vector/Orderfood.png'),
  },
  {
    key: '4',
    title: 'Enjoy Your Meal',
    text: 'Sit back, relax, and enjoy your freshly prepared meal at home!',
    image: require('../../assets/vector/EatingFood.png'),
  }
];

export default function WelcomeSlider() {
  const sliderRef = useRef(null);
  const navigation = useNavigation(); 

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderNextButton = () => (
    <TouchableOpacity style={styles.nextButton}>
      <Text style={styles.buttonText}>NEXT</Text>
    </TouchableOpacity>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}> 
      <Text style={styles.buttonText}>GET STARTED</Text>
    </TouchableOpacity>
  );

  const renderSkipButton = () => (
    <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Hello')}>
      <Text style={styles.skipText}>SKIP</Text>
    </TouchableOpacity>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      showSkipButton
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: '#FF7F3F',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  skipButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#999',
  },
  dot: {
    backgroundColor: '#ddd',
    width: 8,
    height: 8,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#FF7F3F',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
