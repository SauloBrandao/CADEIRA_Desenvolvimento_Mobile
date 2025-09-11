import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LayoutResponsive = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text>Cabeçalho</Text>
        </View>

    <Text>Conteúdo Principal</Text>
    <Text>Rodapé</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'},
})

export default LayoutResponsive