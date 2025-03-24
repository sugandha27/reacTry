import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Cards</Text>
      <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
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
    container:{
        flex : 1,
        flexDirection: 'row',
        padding: 4
    },
    card:{
        width:100,
        height:100,
        borderRadius: 7,
        margin:8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor: '#50DBB4'
    },
    cardThree:{
        backgroundColor: '#5DA3FA'
    }
})