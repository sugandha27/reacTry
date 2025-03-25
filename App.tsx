import { 
  View, 
  Text, 
  SafeAreaView,
  ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards></FlatCards>
      <ElevatedCards></ElevatedCards>
      <FancyCards/>
      <ActionCards></ActionCards>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App