import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
function AllLounge() {
const [places,setPlaces]=useState([])

const get = () => {
  axios.get('http://192.168.1.13:3000/api/places/getApp&cat/Lounge')
    .then((res) => {
      setPlaces(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(()=>{
    get()
  },[])
  return (
    <View style={styles.places}>
    {places.map((e)=>(
      <View style={styles.card}>
      <View style={styles.all}>
      <Image
      source={{ uri: e.images }}
      style={styles.image}
      />
      <Text style={styles.title}>{e.name}</Text>
      <Image
      source={{ uri: "https://static.thenounproject.com/png/766721-200.png" }}
      style={styles.rating}
      />
      <Image
      source={{ uri: "https://static.vecteezy.com/system/resources/previews/018/888/722/original/red-heart-icon-png.png" }}
      style={styles.like}
      />
      <Text style={styles.category}>{e.category}</Text>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Book a table </Text>
      </TouchableOpacity>
      </View>
      </View>
      ))}
     
    </View>
  );
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
    marginBottom: 15
  },
  image: {
    width: 152,
    height: 154,
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  all: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25
  },
  rating: {
    top: 10,
    left: -35,
    width: 84,
    height: 84,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: '#E7AF2F',
    borderRadius: 14,
    justifyContent: 'center', // Align the text content vertically
    alignItems: 'center', // Align the text content horizontally
    borderWidth: 1,
    borderColor: 'white', // Change this color
    zIndex: 1,
    left:-129,
    height:40,
    width:122,
    top:106
  },
  category: {
    top: 70,
    left: -155,
    fontSize: 18
  },
  like: {
    top: 105,
    left: -116,
    width: 44,
    height: 44,
  },

});

export default AllLounge;
