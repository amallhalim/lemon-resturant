import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Button,
  Alert,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainLayout from '@/components/layouts/MainLayout';

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
          {/* Title Section */}
          <ThemedView style={styles.titleContainer}>
            <Button
              title="Left Button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <ThemedText type="title" style={styles.titleText}>
              Welcome 🎉
            </ThemedText>
          </ThemedView>

          {/* Navigation Section */}
          <View style={styles.navigationContainer}>
            <Button
              title="Go to Reservation"
              onPress={() => router.push('/o')}
              color="#007BFF"
            />
            <Button
              title="Reservation 33"
              onPress={() => router.push('/Reservation/Reservation')}
              color="#007BFF"
            />
            <Button
              title="Reservation 4cons=======t"
              onPress={() => router.push('/Reservation/Reservation' as const)}
              color="#007BFF"
            />
            <Button
              title="Go to User"
              onPress={() => router.push('/Hello')}
              color="#007BFF"
            />
            <Button
              title="Go to menu===="
              onPress={() => router.push('/menu')}
              color="#007BFF"
            />
            <Button
              title="Profile"
              onPress={() => router.push('/profile')}
              color="#007BFF"
            />
            <Button
              title="Hello Page"
              onPress={() => router.push('/Hello')}
              color="#007BFF"
            />
            <Button
              title="Test Page"
              onPress={() => router.push('/Test')}
              color="#007BFF"
            />
            <Link href="/a" style={styles.link}>
              Go to Page A
            </Link>
            <Link href="/b" style={styles.link}>
              Go to Page B
            </Link>
            <Link
              href={{
                pathname: '/User',
              }}
              style={styles.link}
            >
              View User
            </Link>
          </View>

          {/* Interactive Section */}
          <View style={styles.interactiveSection}>
            <Pressable
              onPress={incrementCount}
              style={({ pressed }) => [
                styles.pressable,
                { backgroundColor: pressed ? '#E0F7FF' : '#FFFFFF' },
              ]}
            >
              <Text style={styles.pressableText}>Press Me</Text>
            </Pressable>
            <TouchableHighlight
              onPress={incrementCount}
              underlayColor="#DDDDDD"
            >
              <View style={styles.touchableButton}>
                <Text style={styles.touchableText}>Touch Here</Text>
              </View>
            </TouchableHighlight>
          </View>

          {/* Counter Display */}
          <View style={styles.countContainer}>
            <Text style={styles.countText}>Count: {count}</Text>
          </View>

          {/* Hello Wave Component */}
          <HelloWave />
        </ParallaxScrollView>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: '#EAF7F9',
    borderRadius: 8,
    marginVertical: 8,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  reactLogo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  navigationContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    marginVertical: 6,
  },
  interactiveSection: {
    marginVertical: 16,
    alignItems: 'center',
  },
  pressable: {
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  pressableText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  touchableButton: {
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  touchableText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  countContainer: {
    alignItems: 'center',
    padding: 16,
    marginVertical: 16,
    backgroundColor: '#FFF0F6',
    borderRadius: 8,
    elevation: 2,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});
