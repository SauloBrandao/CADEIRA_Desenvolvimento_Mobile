import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Exercicio1 = ({Nome}) => {
  return (
    <View style = {styles.container}>
      <Text>Olá {Nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
            justifyContent: 'center',
            padding: '100'
    }
})
export default Exercicio1