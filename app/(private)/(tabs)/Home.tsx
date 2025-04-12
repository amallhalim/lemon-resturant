import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
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
import { collection, addDoc } from "firebase/firestore";
 import{DB} from "../../../config/firebase"
 import useAddSingleDish from "../../../hooks/useAddSingleDish"
 import useAddAllDish from "../../../hooks/useAddAllDish"
 import useFetchDish from "../../../hooks/useFetchDish"
 import useAddAllCategory from "../../../hooks/useAddAllCatergory"
 import useFetchCategory from "../../../hooks/useFetchCategory"
import { useUserStore } from '@/store';
export default function Home() {
  const [text, onChangeText] = useState('Useless Text');
  const [errorState, setErrorState] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
const [categoriesData, setCategoriesData] = useState([]);

const {dishs, AddSingleDish}=useAddSingleDish()
const {allDishs, AddAllDish}=useAddAllDish()

const { allCategorys, AddAllCategory}=useAddAllCategory()
const { categories,catergoryLoading,categoryError,fetchAllCategory}=useFetchCategory()

//  add all dishes 
useEffect(() => {
  // AddAllDish()
  // fetchDish()
  // AddAllCategory()
},[])
useEffect(() => {
  fetchAllCategory()
},[])
useEffect(() => {
  // fetchAllCategory()
  setCategoriesData(categories)
},[categories])


// const {dishesData ,fetchDish}=useFetchDish()

// useEffect(() => {
//   fetchDish({key: 'trend',value: true})
// },[])

  const addUser = async () => {
    try {
      await addDoc(collection(DB, "users"), {
        name: "John Doe",
        email: "johndoe@example.com",
      });
      console.log("User added!");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  const user = useUserStore(state=>state.user)
  console.log("🚀 ~ Home ~ user:", user)

  return (
    <View style={styles.container} >
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <Image source={require('../../../assets/images/avator/manAvator.jpg')} style={{
          width: 50, height: 50, borderRadius: 50
        }} />
        <Text>Hey Halal, Good Afternoon!</Text>
        <FontAwesome5 name="list-ul" size={24} color="black" />
      </View>
      {errorState ? <Text style={{ color: 'red' }}>{errorState}</Text> : null}

<TouchableOpacity style={{ backgroundColor: "green"}} onPress={AddAllDish}>
  <Text style={{}}>AddAllDish</Text>
</TouchableOpacity>



<TouchableOpacity style={{}} onPress={addUser}>
  <Text style={{}}>Add Test Data</Text>
  </TouchableOpacity>


      <SearchField text={text} onChangeText={onChangeText} />

      <View style={styles.sliderContainer}>
        <HomeSlider />
      </View>

      <Text>{text}</Text>

      <View>
        <ScrollView style={styles.scrollView}  horizontal>
          {categoriesData.map(category =>
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
