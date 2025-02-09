import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode; 
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>
        {children} 
      </View>
      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'brown',
    flexDirection: 'column', 
  },
  content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
