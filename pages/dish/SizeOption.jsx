import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function SizeOption() {

    const SizeOption =[{value:"small"},{value:"meduim"},{value:"large"}]
  return (
    <View>
        <View style ={styles.container}>
        <Text style ={styles}>Size:</Text>
      {SizeOption?.map(({value})=> (
          (<Text style ={styles.icon}>{value}</Text>) ))
        }
        </View>
    </View>
  )
}
const styles =StyleSheet.create({
    container: {
      display: "flex",      
      flexDirection: 'row', 
      margin:10
      ,flexWrap:"wrap"
      },
    icon: {
        fontSize: 15,
        color:"white",
        backgroundColor: Colors.light.primary[800],
        marginBottom: 10,
        borderRadius:50,
        width:80,
        height:25,
        padding:2,
        textAlign:"center",
        display:"inline",
        margin:1


      },
})