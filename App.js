import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './AppNavigator'
import Toast from 'react-native-toast-message'

const App = () => {
  return (
    <View style={{flex:1}}>
      <AppNavigator/>
      <Toast/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})