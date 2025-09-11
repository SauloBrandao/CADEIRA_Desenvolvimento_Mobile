import { View} from 'react-native'
import React from 'react'
import LayoutResponsive from './src/components/LayoutResponsive'

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LayoutResponsive></LayoutResponsive>
    </View>
  )
}
export default App