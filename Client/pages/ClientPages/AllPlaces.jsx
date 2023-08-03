import React, { useState, useEffect } from 'react';
import { View,Text,StyleSheet,TextInput,Image } from 'react-native'

function AllPlaces() {
  return (
   <View style={styles.places}>
   <View style={styles.card}>
   <View style={styles.all}>
   <Image
          source={{ uri: "https://www.bnina.tn/wp-content/uploads/2019/03/The-716-Lac-2-2.jpeg" }}
          style={styles.image}
        />
        <Text> The 716</Text>
        
        </View>
   </View>
   </View>
  )
}
const styles = StyleSheet.create({
    places: {
        flex: 1,
        backgroundColor: '#E7AF2F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 352,
        height: 154,
        backgroundColor: 'white',
        borderRadius: 26,
      },
      image:{
        width: 152,
        height: 154,
        borderTopLeftRadius: 26,
        borderBottomLeftRadius: 26,
      },
      all:{
        flexDirection: 'row',
      }
})
export default AllPlaces
