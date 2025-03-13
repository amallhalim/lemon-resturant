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
import HomeSlider from "../../pages/home/HomeSlider"
import DishCard from "../../pages/home/DishCard"
import TrendDishData from "../../StaticData/TrendDishData"
export default function Home() {
  const [text, onChangeText] = useState('Useless Text');



  return (
    <View style={styles.container} >
      <Text>Hey Halal, Good Afternoon!</Text>
      <SearchField text={text} onChangeText={onChangeText} />
      <View style={styles.sliderContainer}>
        <HomeSlider />
      </View>
      <Text>{text}</Text>
      <Text> all categories222</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal
      >
        {categoryData.map(category =>
          <CategorySmallLabal categoryData={category} />)}
      </ScrollView>
      <Text> all categories</Text>
      <View>
        <ScrollView horizontal  style={styles.TrendContainer}>
          {TrendDishData?.map((dish) => {
            return (
              <View style={styles.row}>
                <DishCard dish={dish} />
              </View>
            )
          })
          }
        </ScrollView>
      </View>
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
  TrendContainer: {
    // flexDirection: 'row',  // Ensures the cards are displayed horizontally
    backgroundColor: '#F5F5',  // Adjust the background if needed
    padding: 16,
    // flexWrap: "wrap",  // Allow wrapping for multiple rows if there are many items
    // justifyContent: 'space-between', // Optional: Adjust spacing between cards
  },

  scrollView: {
    backgroundColor: 'pink',
    padding: 2,
    flexGrow: 0,
  },
  sliderContainer: {
    backgroundColor: 'pink',
    height: "35%",
    padding: 2,
    // marginBottom:
    marginTop:30
  }
  ,
  row: {
    // flex: 1,
    // width: "100%",
    // height: "90%",
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginBottom: 20,
    // flexWrap: "wrap",
    // overflowX:true,
    
  }


});
