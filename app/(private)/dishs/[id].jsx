import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useProductStore } from "../../../store"
import { Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '../../../constants/Colors';
import SizeOption from '../../../pages/dish/SizeOption';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function DishDetails() {

  const product = useProductStore(state => state.selectedproductData)
  console.log("🚀 ~ DishDetails ~ product:", product)
const [size, setSize] = useState("medium")
const [count, setCount] = useState(0)
  const onSelectSize = (size) => {
    setSize(size)
  }
  return (
    <View style={styles.container} key={product?.id}>
      <View style={styles.details}>
        <ImageBackground source={product?.img} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        <Text style={styles.title}>{product?.name}</Text>
        <View style={styles.rowTitle}>
          <View style={styles.iconContainer}>
            <Text style={styles.title}>
              <Entypo name="star-outlined" size={24} color={Colors.light.primary[800]} />
              <Text style={styles.title}>
                {product?.rate}
              </Text>
            </Text>
            <Text style={styles.title}>
              <MaterialIcons name="delivery-dining" size={20} color={Colors.light.primary[800]} />
              free
            </Text>
            <Text style={styles.title}>
              <FontAwesome5 name="clock" size={20} color={Colors.light.primary[800]} />
              {product?.duration} min
            </Text>
          </View>
        </View>
        <Text style={styles.desc}> {product?.desc}</Text>
        <SizeOption onSelectSize ={onSelectSize}/>
      </View>
      <View style={styles.info}>
        <View style={styles.footer}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.title}>{product?.price}</Text>
            <View style={styles.count}>
              <TouchableOpacity
                onPress={() =>setCount(count + 1)}>

                <Text style={styles.countCircle}>  + </Text>
              </TouchableOpacity>
              <Text style={styles.countTitle}> {count}  </Text>
              <TouchableOpacity
                onPress={() => {
                  if (count > 0)  setCount(count - 1)            
                }}
             
              >  
                <Text style={styles.countCircle}>  - </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => Alert.Alert('Left button pressed')}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    padding: 5,
    backgroundColor: Colors.light.background.primary,
  },
  footer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    padding: 5,
    backgroundColor: Colors.light.background.lightgGray,
    border: "solid black 1px",
    marginBottom: 77,
    borderRadius: 40,
    paddingTop: 20
  },
  rowTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    display: "flex",
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15
  },
  desc: {
    fontSize: 20,
    color: Colors.light.font.lightGray,
    padding: 10
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: 'hidden',
  },
  details: {
    flex: 4
  },
  info: {
    flex: 2
  },
  countTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    padding: 5
  },
  count: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.light.black[800],
    borderRadius: 30,
    width: "35%",
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  countCircle: {
    backgroundColor: "green",
    borderRadius: 100,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: Colors.light.gray[500],
    color: "white",
    textAlign: "center",
    lineHeight: 35,
    padding: 0
  },
  icon: {
    margin: 10,
    padding: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  addBtn: {
    backgroundColor: Colors.light.primary[800],
    borderRadius: 10,
    height: 60,
    width: "90%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
