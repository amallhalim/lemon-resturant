import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';

import { Colors } from '@/constants/Colors';
import SearchField from "../../components/common/input/SearchField"
import CategorySmallLabal from "../../pages/home/CategorySmallLabal"
import categoryData from "../../StaticData/categoryData"
export default function Home() {
  const [text, onChangeText] = useState('Useless Text');



  return (
    <View style={styles.container} >
      <Text>Hey Halal, Good Afternoon!</Text>
      <SearchField text={text} onChangeText={onChangeText} />
      <Text>{text}</Text>

      <Text> all categories</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
      >
        {categoryData.map(category =>
          <CategorySmallLabal categoryData={category} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",

  },
  scrollView: {
    backgroundColor: 'pink',
    display: "flex", flexDirection: "column"
  }
  , catgoryContainer: {
    backgroundColor: '#fff',
    width: 150,
    height: 60,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    flexWrap: "wrap",
    overflowX: "scroll"
  },
  image: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    marginLeft: 5,
  },
});
