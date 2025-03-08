import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useEffect, useState } from 'react';

import { Colors } from '@/constants/Colors';
import SearchField from "../../components/common/input/SearchField"
export default function Home() {
  const [text, onChangeText] = useState('Useless Text');
  


  return (
    <View style={styles.container} >
      <Text>Hey Halal, Good Afternoon!</Text>
      <SearchField text ={text} onChangeText={onChangeText}/>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",

  }
});
