import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function SizeOption() {

  const SizeOption = [{ value: "small" }, { value: "meduim" }, { value: "large" }]
  return (
    <View>
      <View style={styles.container}>

        <Text style={styles.title}>Size:  </Text>
        {SizeOption?.map(({ value }) => (
          (
            <TouchableOpacity       
                onPress={() => Alert.Alert('Left button pressed')}
>
          <Text style={styles.icon}>{value}</Text>
        </TouchableOpacity>

        )
        ))
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    margin: 10
    , flexWrap: "wrap"
  },
  title: {
    fontSize: 14,
marginTop:8
  },
  icon: {
    fontSize: 14,
    color: "white",
    backgroundColor: Colors.light.primary[800],
    marginBottom: 10,
    borderRadius: 50,
    width: 60,
    height: 29,
    padding: 4,
    textAlign: "center",
    display: "inline",
    margin: 3


  },
})