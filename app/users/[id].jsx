import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function UserPage() {
    const {id}=useLocalSearchParams()
  return (
    <View style={{display:"flex",marginTop:"300px",backgroundColor:"red",height:"100%"}}>
      <Text>[UserPage--------]
        {id}
        {id}
        {id}
        {id}
        {id}
      </Text>
    </View>
  )
}