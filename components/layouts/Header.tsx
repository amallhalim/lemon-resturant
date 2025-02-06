import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{backgroundColor:"yellow",width:"100%"}}>
      <Text
        style={{ padding: 10, fontSize: 30, color: 'black' }}
        >
            Header
      </Text>
    </View>
  );
}
