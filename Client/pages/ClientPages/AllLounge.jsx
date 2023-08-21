import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/NavBar';
import Pub from '../../components/ClientComponent/pubLounge';
import { useNavigation } from '@react-navigation/native';


function AllLounge() {
  const navigation = useNavigation()
const [places,setPlaces]=useState([])
const [heartClicked, setHeartClicked] = useState(false);

const get = () => {
  axios.get('http://192.168.234.127:3000/api/places/getApp&cat/Lounge')
    .then((res) => {
      setPlaces(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const handleHeartClick = (placeId) => {
    setHeartClicked((prev) => ({
      ...prev,
      [placeId]: !prev[placeId],
    }));
  };

  const postFavorite = (placeId) => {
    axios
      .post('http://192.168.234.127:3000/api/Favorite/create/1', { Places_id: placeId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(()=>{
    get()
  },[])
  return (
    
    <View style={styles.container}>
    <View style={styles.pubContainer}>
         <Pub />
       </View>
    <View style={styles.scrollContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      
       {places.map((place) => (
         <View style={styles.card} key={place.id}>
           <View style={styles.cardContent}>
             <Image source={{ uri: place.images }} style={styles.image} />
             <View style={styles.details}>
               <Text style={styles.title}>{place.name}</Text>
               <TouchableOpacity 
   onPress={() => {
     handleHeartClick(place.id)
     postFavorite(place.id)
     
     }}
   style={styles.likeButton}
 >
   <FontAwesome
     name={heartClicked[place.id] ? 'heart' : 'heart-o'}
     size={24}
     color={heartClicked[place.id] ? 'red' : 'black'}
     style={styles.likeIcon}
   />
 </TouchableOpacity>
               <Text style={styles.category}>{place.category}</Text>
               <View style={styles.ratingContainer}>
                 <Image
                   source={{ uri: 'https://static.thenounproject.com/png/766721-200.png' }}
                   style={styles.rating}
                 />
               </View>
               <View style={styles.actionsContainer}>
                 <TouchableOpacity
                   style={styles.button}
                   onPress={() => navigation.navigate('PlaceProfil')}>
                   <Text style={styles.buttonText}>Book a table</Text>
                 </TouchableOpacity>
               </View>
             </View>
             
           </View>
         </View>
        
       ))}
       </ScrollView>
       </View>
       <Navbar />
     </View>
 
    
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#E7AF2F',
     alignItems: 'center',
     justifyContent: 'center',
   },
   pubContainer : {
     marginTop: -120 
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
   likeButton : {
     fontSize: 30,
     marginLeft : 140,
     marginTop : -32
   }
 });

export default AllLounge;
