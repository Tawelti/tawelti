import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/NavBar';
import Pub from '../../components/ClientComponent/pubCoffe';

function AllCoffe() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]);
  const [heartClicked, setHeartClicked] = useState(false);

  const get = () => {
    axios
      .get('http://192.168.234.127:3000/api/places/getApp&cat/coffe')
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <View style={styles.places}>
      <View style={styles.pub}>
        <Pub />
      </View>
      {places.map((e) => (
        <View style={styles.card} key={e.id}>
          <View style={styles.all}>
            <Image source={{ uri: e.images }} style={styles.image} />
            <Text style={styles.title}>{e.name}</Text>
            <Image
              source={{ uri: 'https://static.thenounproject.com/png/766721-200.png' }}
              style={styles.rating}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => navigation.navigate('PlaceProfil')}>
                Book a table
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.likeIconContainer} onPress={handleHeartClick}>
            <FontAwesome
              name="heart"
              size={44}
              color={heartClicked ? 'white' : 'red'}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.category}>{e.category}</Text>
        </View>
      ))}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  pub: {
    marginTop: -180,
  },
  places: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 352,
    height: 154,
    backgroundColor: 'white',
    borderRadius: 26,
    marginBottom: 15,
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
    fontSize: 25,
  },
  rating: {
    top: 10,
    left: -88,
    width: 84,
    height: 84,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: '#E7AF2F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    left: -159,
    height: 40,
    width: 122,
    top: 106,
  },
  category: {
    top: 70,
    left: -205,
    fontSize: 18,
  },
  likeIconContainer: {
    top: 15, 
    left: 15, 
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default AllCoffe;
