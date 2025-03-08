import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';
import { useProductStore, useUserStore, useCartStore } from "../../store";

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const incrementCount = () => setCount(count + 1);

  const setUser = useUserStore(state => state.setUser);
  const clearUser = useUserStore(state => state.clearUser);
  const user = useUserStore(state => state.user);
  const addProduct = useProductStore(state => state.addProduct);
  const allProductList = useProductStore(state => state.allProductList);
  const removeAllProduct = useProductStore(state => state.removeAllProduct);
  const cartData = useCartStore(state => state.cartData);

  const handleClearUser = () => {
    clearUser();
  };
  const handleClearProduct = () => {
    removeAllProduct();
  };

  const handleSetUser = () => {
    setUser({ id: 1, name: 'Jane Doe', email: 'jane@example.com' });
  };
  const handleAddProduct = () => {
    addProduct({ id: 1, name: 'Jacket', price: '1000' });
  };

  return (
    <MainLayout>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }
      >
        {/* Welcome Section */}
        <View>
          <ImageBackground
            source={require("../../assets/category/thanksgiving.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/sweet.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/spaghetti.png")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/chicken.png")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/drink.png")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/salmon.png")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/meat.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/meat.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/meat.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/pizza.png")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/pizza.gif")}
            // resizeMode="cover"
            style={styles.image}
          />
          <ImageBackground
            source={require("../../assets/category/burger (1).gif")}
            // resizeMode="cover"
            style={styles.image}
          />
        </View>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.titleText}>
            Welcome 🎉
          </ThemedText>
          <ThemedText style={styles.subtitleText}>
            Explore and navigate through the app
          </ThemedText>
        </ThemedView>

        {/* Log In Button */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/Login')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.buttonText}>Go to WelcomeScreen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/Reservation')}
          >
            <Text style={styles.buttonText}>Go to Reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* User Interaction Buttons */}
        <View style={styles.interactiveSection}>
          <Pressable onPress={handleSetUser} style={styles.pressable}>
            <Text style={styles.pressableText}>Set User to Jane Doe</Text>
          </Pressable>
          <Pressable onPress={handleClearUser} style={styles.pressable}>
            <Text style={styles.pressableText}>Clear User</Text>
          </Pressable>
        </View>

        {/* Cart Info */}
        <View style={styles.cartInfoContainer}>
          <Text style={styles.cartInfoText}>
            Cart Items: {cartData.length}
          </Text>
        </View>

        {/* Hello Wave Component */}
        <HelloWave />
      </ParallaxScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EAF7F9',
    borderRadius: 10,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 30,
    overflow: 'hidden',
  },
  reactLogo: {
    height: 150,
    width: 150,
  },
  navigationContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  interactiveSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pressable: {
    backgroundColor: '#E0F7FF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  pressableText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cartInfoContainer: {
    marginTop: 20,
    backgroundColor: '#FFF0F6',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  cartInfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});
