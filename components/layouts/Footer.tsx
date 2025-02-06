import React from 'react';
import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={{backgroundColor:"green",width:"100%"}}>
      <Text
        style={{ padding: 2, fontSize: 30, color: 'black' }}
        >
          footer
      </Text>
    </View>
  );
}
