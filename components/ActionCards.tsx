import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Travel Cards</Text>
      <View style ={[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style={styles.headerText}>Time to wander in wonder!</Text>
        </View>
        <Image source ={{
            uri :'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ekodt74sE9k22Kcb1D_9XwHaFj%26pid%3DApi&f=1&ipt=eed12b9ff6be78ecee8a3a34ba72c016a3b27fb48cceb8d4697965e7e6d74f67&ipo=images'
        }}
        style ={styles.cardImage}></Image>
        <View style ={styles.bodyContainer}>
            <Text numberOfLines={4}>
            Exploring new horizons broadens the mind and spirit.
Each journey unveils unique cultures and perspectives.
Travel creates lasting memories and enriches our lives.
            </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/sugandha-bhandari27/')}>
                <Text style ={styles.socialLinks}>About Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/sugandha-bhandari27/')}>
                <Text style ={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop:40,
        textAlign:'center'
    },
    card:{
        width:380,
        height:600,
        borderRadius:7,
        marginVertical:12,
        marginHorizontal:10
    },
    elevatedCard:{
        backgroundColor:'#F0DF87',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity :0.4
    },
    headerText:{},
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage:{
        height:400
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        backgroundColor:'#DAE0E2',
        padding:7,
        borderRadius:14,
        elevation:4
    }
})