import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import{ useProductStore} from "../../store"

export default function DishDetails() {
    const {id}=useLocalSearchParams()

const product = useProductStore(state=> state.selectedproductData)

  return (
    <View style={styles.container}>
      <ImageBackground source={product?.img} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <View style={styles.info}>
      <Text style={styles.title}>Dish Details for ID: {id}</Text>
      <Text style={styles.title}>ID: {product?.id}</Text>
      <Text style={styles.title}>name: {product?.name}</Text>
      <Text style={styles.title}>price: {product?.price}</Text>
      <Text style={styles.title}>duration: {product?.duration}</Text>
      <Text style={styles.title}>rate: {product?.rate}</Text>
      <Text style={styles.title}>size: {product?.size}</Text>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});
