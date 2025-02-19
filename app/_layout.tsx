import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AppLayout from '../components/layouts/AppLayout';


export default function RootLayout() {
  const colorScheme = useColorScheme();
 

 

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
