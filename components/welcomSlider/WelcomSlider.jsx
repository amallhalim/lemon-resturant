import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [reachToEnd, setReachToEnd] = useState(0);

  useEffect(() => {
    setReachToEnd(currentSlide === slides?.length - 1)
  }, [currentSlide])

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onSlideChange={(index) => {
          setCurrentSlide(index);
        }}
        onDone={() => {
          Alert.alert("Welcome!", "You have completed the tutorial.");
          navigation.navigate('Home');
        }}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay
        autoplayDelay={5000}
        autoplayInterval={3000}
        infiniteScroll
        allowTouchEvents
        hidePagination={false}
        goToSlide={currentSlide}
      />

      <View style={styles.manualButtonsContainer}>
        {!reachToEnd &&
          <TouchableOpacity
            onPress={() => sliderRef.current?.goToSlide(currentSlide + 1, true)}
            disabled={currentSlide === slides.length - 1}
            style={[styles.manualButton]}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        }
        {reachToEnd && <TouchableOpacity
          style={styles.manualButton}
          onPress={() => navigation.navigate('index')}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>}

        {!reachToEnd && <TouchableOpacity
          onPress={() => navigation.navigate('index')}
          style={[styles.skipButton]}
        >
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    paddingHorizontal: 10,
  },
  skipButton: {
    alignItems: "center"
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: "underline",
  },
  nextButton: {
    backgroundColor: '#FF7F3F',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  manualButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    margin: 30
  },
  manualButton: {
    backgroundColor: '#FF7F3F', paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: 10,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
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
