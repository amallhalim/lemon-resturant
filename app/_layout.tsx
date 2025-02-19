import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AppLayout from '../components/layouts/AppLayout';
import LoadingStartPage from "../components/common/loading/LoadingStartPage";
import { Text } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
const isAuthenticated = true 
  // Simulate data fetching or authentication check
  useEffect(() => {
    const loadData = async () => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 2000);
    };

    loadData();
  }, []);

  // If still loading, show the loading screen
  if (isLoading) {
    return <AppLayout>
      <LoadingStartPage/>
    </AppLayout>; // Or use a loading spinner here
  }

  // If not authenticated, redirect to login page or an unauthorized route
  if (!isAuthenticated) {
    return <AppLayout><Text>You are not authorized. Please log in.</Text></AppLayout>;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppLayout> 
        <Stack
          initialRouteName="index"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="Test" /> 
          <Stack.Screen
            name="users/[id]"
            options={{ headerShown: true, title: 'User Profile' }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </AppLayout>
    </ThemeProvider>
  );
}
