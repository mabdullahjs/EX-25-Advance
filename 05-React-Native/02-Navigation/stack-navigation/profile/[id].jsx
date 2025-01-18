import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DynamicProfile = () => {
    const params = useLocalSearchParams()
  return (
    <View>
      <Text>DynamicProfile {params.id}</Text>
    </View>
  )
}
// /profile/sadasdsad

export default DynamicProfile