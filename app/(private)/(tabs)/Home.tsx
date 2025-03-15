import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { useEffect, useState } from 'react';

import { Colors } from '@/constants/Colors';
import SearchField from "../../../components/common/input/SearchField"
import CategorySmallLabal from "../../../pages/home/CategorySmallLabal"
import categoryData from "../../../StaticData/categoryData"
import HomeSlider from "../../../pages/home/HomeSlider"
import DishCard from "../../../pages/home/DishCard"
import TrendDishData from "../../../StaticData/TrendDishData"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function Home() {
  const [text, onChangeText] = useState('Useless Text');



  return (
    <View style={styles.container} >
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <Image source={require('../../../assets/images/avator/manAvator.jpg')} style={{
          width: 50, height: 50, borderRadius: 50
        }} />
        <Text>Hey Halal, Good Afternoon!</Text>
        <FontAwesome5 name="list-ul" size={24} color="black" />
      </View>
      <SearchField text={text} onChangeText={onChangeText} />

      <View style={styles.sliderContainer}>
        <HomeSlider />
      </View>

      <Text>{text}</Text>

      <View>
        <ScrollView style={styles.scrollView}  horizontal>
          {categoryData.map(category =>
            <CategorySmallLabal categoryData={category} />)}
        </ScrollView>
        <ScrollView horizontal style={styles.TrendContainer}>
          {TrendDishData?.map((dish) => {
            return (
              <View style={styles.DishCard}>
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
    padding: 16,
  },

  scrollView: {
    padding: 2,
    height: 70
  },
  sliderContainer: {
    backgroundColor: 'pink',
    height: "35%",
    padding: 2,
    // marginBottom:
    marginTop: 30
  }
  ,
  DishCard: {
    justifyContent: 'space-between',
    margin: 10,

  }


});
