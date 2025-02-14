import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'gray',
        // headerShown:true,
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarIconStyle: { marginBottom: 5 },
        headerShown: false,
        // headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
        // headerTitleStyle: { fontWeight: 'bold', color: Colors[colorScheme ?? 'light'].text },
        // headerTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: { backgroundColor: 'white' },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Welcome Home', // Custom header title
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Menu"
        options={{
          title: 'Menu',
          headerTitle: 'Our Menu', // Custom header title
          tabBarIcon: ({ color }) => <MaterialIcons name="restaurant-menu" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'Your Profile', // Custom header title
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerTitle: 'Discover', // Custom header title
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
