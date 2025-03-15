import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AppLayout from '../components/layouts/AppLayout';
import LoadingStartPage from "../components/common/loading/LoadingStartPage";
import { useUserStore } from '@/store';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const user = useUserStore(state=>state.user)
  console.log("🚀 ~ RootLayout ~ user:", user)

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

//   // // If not authenticated, redirect to login page or an unauthorized route
//   // if (!user) {
//   //   return <AppLayout><Text>You are not authorized. Please log in.</Text></AppLayout>;
//   // }
// // If not authenticated, redirect to login
// if (!user) {
//   return <Redirect href="/(public)/login" />;
// }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppLayout> 
        <Stack
          initialRouteName="index"
          screenOptions={{ headerShown: false }}

        >
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(private)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </AppLayout>
    </ThemeProvider>
  );
}
