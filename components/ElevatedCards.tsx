import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style ={styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        padding: 8
    },
    card:{
        width: 100,
        height: 100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        margin:8
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:5,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: '#3333',
        shadowOpacity: 0.4
    }
})