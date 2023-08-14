import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import FlatLishComp from '../../components/FlatLishComp'

const list = () => {
  return (
    <View>
      <NativeBaseProvider>
        <FlatLishComp/>
      </NativeBaseProvider>
    </View>
  )
}

export default list