import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar() {
        setContador(contador-1)
    }


  return (
    <View style = {styles.container}>
      <Text>{contador}</Text>
      <Button title="Incrementar" onPress={incrementar}>Incrementar</Button>
      <Button title="Decrementar" onPress={decrementar}>Decrementar</Button>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})
export default Exercicio2