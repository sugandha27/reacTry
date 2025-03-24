import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>A pond of cuteness</Text>
      <View style ={[styles.card, styles.cardElevated]}>
        <Image source ={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fashisheditz.com%2Fwp-content%2Fuploads%2F2023%2F11%2Fcute-cat-wallpaper-hd.jpg&f=1&nofb=1&ipt=f34b827635dae1885b846a2f03347d98c29b27759f2193dda7e364990f89bf00&ipo=images'
        }}
        style ={styles.cardImage}
        />
        <View style ={styles.cardBody}>
            <Text style={styles.cardTitle}>Just smile</Text>
            <Text style={styles.cardDesc}>Did you forget to smile today, this is the reminder someone somewhere is dreaming of your smile.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    },
    card:{
        width:350,
        height:460,
        borderRadius:10,
        marginHorizontal:25,
        marginVertical:10
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        shadowOffset:{
            width:1,
            height:1
        },
        elevation:5
    },
    cardImage:{
        height:500,
        marginBottom:10
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:10

    },
    cardTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardDesc:{
        fontSize:18,
        justifyContent:'center'
    },
    cardFooter:{}
})