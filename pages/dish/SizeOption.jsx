import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function SizeOption({ onSelectSize, initialSize = "medium" }) {
  const options = ['small', 'medium', 'large']
  const [selectedSize, setSelectedSize] = useState(initialSize)
  console.log("🚀 ~ SizeOption ~ selectedSize:", selectedSize)

  useEffect(() => {
    onSelectSize?.(selectedSize)
  }, [selectedSize])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Size:</Text>
        {options.map(value => (
          <Pressable
            key={value}
            onPress={() => setSelectedSize(value)}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              selectedSize === value && styles.buttonSelected,
            ]}
          >
            <Text style={
             [styles.buttonText ,     
                     selectedSize === value && 
                     {color: Colors.light.primary[800]}]
}>{value}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginRight: 6,
  },
  button: {
    backgroundColor: Colors.light.primary[800],
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
        color: 'white',

  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttonSelected: {
    borderWidth: 2,
    backgroundColor: Colors.light.primary[200],
    color: Colors.light.primary[800],
    borderColor: Colors.light.primary[800],

    paddingHorizontal: 20,
    paddingVertical: 6,

  },
  buttonText: {
        color: 'white',
    fontSize: 14,
  },
})
