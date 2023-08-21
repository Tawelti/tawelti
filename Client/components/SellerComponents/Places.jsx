import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Places = () => {
    const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    axios
      .get('http://192.168.234.127:3000/api/places/get/1')
      .then((res) => {
        console.log("places",res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <View style={styles.scrollContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      
       {data.map((place) => (
         <View style={styles.card} key={place.id}>
           <View style={styles.cardContent}>
             <Image source={{ uri: place.images }} style={styles.image} />
             <View style={styles.details}>
               <Text style={styles.title}>{place.name}</Text>
               <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Reservations')}>
            <Text style={styles.buttonText}>Reservations</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MenuSeller')}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
             </View>
             </View>
             
           </View>
         </View>
        
       ))}
       </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '110%',
    height : "100%",
    paddingHorizontal: 20, 
  },
  scrollContent: {
    alignItems: 'center',
  },

  card: {
    width: '95%',
    height : 170 ,
    backgroundColor: 'white',
    borderRadius: 26,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: "50%",
    height: "110%",
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    width: 52,
    height: 52,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#E7AF2F',
    borderRadius: 14,
    width: 120 ,
    alignContent : "center"
    
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  category: {
    fontSize: 13,
    color: '#888',
    marginTop : 5
  },


});

export default Places;
