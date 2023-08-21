import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput , } from 'react-native';
import axios from 'axios';



const FavoritePlaces = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    axios
      .get('http://192.168.234.127:3000/api/Favorite/getAllFavorites/1')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <View style={styles.container}>
      {data.map((place, index) => (
        <View key={index} style={styles.placeContainer}>
          <Image source={{ uri: place.Place.images }} style={styles.placeImage} />
          <Text style={styles.placeName}>{place.Place.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  placeContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  placeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritePlaces;
