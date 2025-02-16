import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const incrementCount = () => setCount(count + 1);

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
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.titleText}>
            Welcome 🎉
          </ThemedText>
          <ThemedText style={styles.subtitleText}>
            Explore and navigate through the app
          </ThemedText>
        </ThemedView>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
            <Text style={styles.buttonText}>Go to WelcomeScreen</Text>
          </TouchableOpacity>
          <Link href="/users/1"> go to user 1</Link>
          <Link href="/users/5"> go to user 5</Link>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/Reservation')}>
            <Text style={styles.buttonText}>Go to Reservation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/profile')}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/Menu')}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/Test')}>
            <Text style={styles.buttonText}>Test Page</Text>
          </TouchableOpacity>
          <Link href="/a" style={styles.link}>Go to Page A</Link>
          <Link href="/b" style={styles.link}>Go to Page B</Link>
        </View>

        {/* Interactive Section */}
        <View style={styles.interactiveSection}>
          <Pressable onPress={incrementCount} style={styles.pressable}>
            <Text style={styles.pressableText}>Tap to Increase Count</Text>
          </Pressable>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>Count: {count}</Text>
          </View>
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
  reactLogo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
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
  link: {
    color: '#1E90FF',
    fontSize: 16,
    marginVertical: 6,
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
  countContainer: {
    marginTop: 10,
    backgroundColor: '#FFF0F6',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});
