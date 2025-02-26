import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import{ useProductStore} from "../../store"
import { AntDesign, Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '../../constants/Colors';
import SizeOption from '../../pages/dish/SizeOption';

export default function DishDetails() {
    const {id}=useLocalSearchParams()

const product = useProductStore(state=> state.selectedproductData)

  return (
    <View style={styles.container}>
      <ImageBackground source={product?.img} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <View style={styles.rowTitle}>

      <Text style={styles.title}>
      <Entypo name="star-outlined" size={24} color={Colors.light.primary[800]}/>
        {product?.rate}</Text>
      <Text style={styles.title}> 
      <FontAwesome5 name="clock" size={20} color={Colors.light.primary[800]} />
        {product?.duration} min

      </Text>
      </View>
      <SizeOption/>
      <Text style={styles.desc}> {product?.desc}</Text>
      
            <View style={styles.info}>
      <Text style={styles.title}>Dish Details for ID: {id}</Text>
      <Text style={styles.title}>ID: {product?.id}</Text>
      <Text style={styles.title}>name: {product?.name}</Text>
      <Text style={styles.title}>price: {product?.price}</Text>
      </View>
      

      <Text style={styles.title}>size: {product?.size}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    flexDirection:"column",
    justifyContent: 'center',
    padding:5,

  },
  rowTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin:20
  },
  desc: {
    fontSize: 20,
  color:Colors.light.font.lightGray,
  padding:10
  },
  image: {
    flex: 1,
    width:"100%",
    height:"100%",
    borderRadius:30,
    overflow: 'hidden',
  },
  info: {
    flex: 2
  },
  icon: {
    margin: 10,             // Add margin around the icon
    padding: 5,             // Add padding inside the icon
    backgroundColor: '#e0e0e0', // Add background color (if needed)
    borderRadius: 10,       // Apply rounded corners to the icon
  },
});
