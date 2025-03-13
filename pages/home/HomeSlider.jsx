import { useUserStore } from '@/store';
import { useRouter } from 'expo-router';
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Clipboard,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '2',
    title: 'Fast & Secure Delivery',
    text: 'Your food arrives fresh, hot, and on time—every time!',
    image: require('../../assets/images/HomeSlider/DeliveryFood.jpg'),
    promoCard: {
      promoTitle: 'BOGO Offer',
      promoSubtitle: 'Buy 1, Get 1 Free on selected items',
      promoDescription: 'Don’t miss out on this limited-time deal!',
      promoCode: 'BOGOFEAST',
    },
  },
  {
    key: '1',
    title: 'Order from Top Chefs',
    text: 'Discover and order delicious meals from your favorite chefs with just a few taps.',
    image: require('../../assets/images/HomeSlider/meal.jpg'),
    promoCard: {
      promoTitle: 'FREE Delivery',
      promoSubtitle: 'On all orders above $20',
      promoDescription: 'Enjoy fast shipping on your next order!',
      promoCode: 'FREESHIP20',
    },
  },
  {
    key: '4',
    title: 'Enjoy Your Meal',
    text: 'Kick back, relax, and savor your freshly made meal in the comfort of your home!',
    image: require('../../assets/images/HomeSlider/sweet2.jpg'),
    promoCard: {
      promoTitle: 'FREE Dessert',
      promoSubtitle: 'With any main course',
      promoDescription: 'Sweeten your meal with this offer!',
      promoCode: 'SWEETDEAL',
    },
  },
  {
    key: '3',
    title: 'Track Your Order',
    text: 'Track your order in real time and get instant updates on its progress.',
    image: require('../../assets/images/HomeSlider/trackOrder.jpg'),
    promoCard: {
      promoTitle: '20% OFF',
      promoSubtitle: 'For first-time customers',
      promoDescription: 'Welcome to a world of flavor!',
      promoCode: 'WELCOME20',
    },
  },

  {
    key: '5',
    title: 'Indulge in Every Bite',
    text: 'Experience mouthwatering flavors, crafted with care by top chefs.',
    image: require('../../assets/images/HomeSlider/boyEatPasta.jpg'),
    promoCard: {
      promoTitle: '50% OFF',
      promoSubtitle: 'On Salad & Pasta',
      promoDescription: 'Savor the taste with this discount!',
      promoCode: 'Madang50',
    },
  },
  {
    key: '6',
    title: 'Unwind & Savor',
    text: 'Unwind and enjoy a chef-prepared meal, delivered right to your doorstep!',
    image: require('../../assets/images/HomeSlider/releaxMan.jpg'),
    promoCard: {
      promoTitle: 'Special Weekend Deal',
      promoSubtitle: '25% OFF on all orders',
      promoDescription: 'Make your weekend tastier!',
      promoCode: 'WEEKEND25',
    },
  },
];

export default function HomeSlider() {
  const sliderRef = useRef(null);
  const router = useRouter();
  const UpdatePromoCode = useUserStore((state) => state.UpdatePromoCode);

  const copyToClipboard = (code) => {
    Clipboard.setString(code);
    Alert.alert("Copied!", `Promo code "${code}" has been copied.`);
  };

  const applyPromoCode = (code) => {
    UpdatePromoCode(code);
    Alert.alert("Applied!", `Promo code "${code}" has been applied.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />

      {item.promoCard && (
        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>{item.promoCard.promoTitle}</Text>
          <Text style={styles.promoSubtitle}>{item.promoCard.promoSubtitle}</Text>
          <Text style={styles.promoDescription}>{item.promoCard.promoDescription}</Text>

          <View style={styles.promoRow}>
            <TouchableOpacity onPress={() => copyToClipboard(item.promoCard.promoCode)} style={styles.copyContainer}>
              <Text style={styles.promoCode}>{item.promoCard.promoCode}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => applyPromoCode(item.promoCard.promoCode)}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onSlideChange={(index) => console.log(`Slide ${index}`)}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay
        autoplayDelay={5000}
        autoplayInterval={3000}
        infiniteScroll
        allowTouchEvents
        hidePagination={false}
        showNextButton={false}
        showDoneButton={false}
        style={styles.slider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  promoCard: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    top: 50,
    right: 20,
    padding: 20,

    backgroundColor: 'rgba(255, 140, 0, 0.9)',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  promoTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  promoSubtitle: {
    fontSize: 18,
    color: '#FFF',
    marginVertical: 6,
  },
  promoDescription: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  },
  promoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  copyContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  promoCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  applyButton: {
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 8,
    marginLeft: 10, // Space between code and button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#FFF',
  },
  activeDot: {
    backgroundColor: '#FF8C00',
  },
});

