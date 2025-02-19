import React from 'react';
import {StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const AppLayout = ({children}) => {
  const { top, bottom, left, right } = useSafeAreaInsets();
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{flex: 1}, { paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }]}>
        {children} 
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppLayout;


