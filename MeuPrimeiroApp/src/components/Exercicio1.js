import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Exercicio1 = ({Nome}) => {
  return (
    <View>
      <Text>Olá {Nome}</Text>
    </View>
  )
}

export default Exercicio1