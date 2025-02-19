import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const AppLayout = ({ children }) => {
  const { top, bottom, left, right } = useSafeAreaInsets();
  console.log("🚀 ~ AppLayout ~ top, bottom, left, right:", top, bottom, left, right)



  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
        //   { paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right },
        ]}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppLayout;
